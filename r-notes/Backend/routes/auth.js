const express = require("express");
const router = express.Router();

const User = require("../models/Users");

const jwt = require("jsonwebtoken");

const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const secret = "qwertyuiop";
const fetchUser = require("../middleware/fetchUser");

// route for signup --->
router.post(
  "/createuser",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        return res
          .status(400)
          .json({ success, error: "User already exists with this email" });
      }
      const salt = await bcrypt.genSalt(10);
      const passwrd = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: passwrd,
      });

      const data = {
        user: { id: user.id },
      };
      const jwtData = jwt.sign(data, secret);
      success = true;
      res.json({ success, jwtData });
      // console.log(jwtData);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

// route for login -->
router.post(
  "/login",
  [body("email").isEmail(), body("password").exists()],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      let name = user.name;
      if (!user) {
        return res
          .status(400)
          .json({ success, error: "No user with this email id exists." });
      }

      const checkPass = await bcrypt.compare(password, user.password);
      if (!checkPass) {
        return req.status(400).json({success, error: "Incorrect password" });
      }

      const data = {
        user: { id: user.id },
      };
      
      success = true;
      const jwtData = jwt.sign(data, secret);
      res.json({ success, jwtData, name });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server errorrrr");
    }
  }
);

// route for retrieving the user account --->
router.post("/getuser", fetchUser, async (req, res) => {
  try {
    const userid = req.user.id;
    const user = await User.findById(userid).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("internal Server Error");
  }
});

module.exports = router;

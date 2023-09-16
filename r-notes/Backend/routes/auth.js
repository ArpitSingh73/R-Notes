const express = require("express");
const router = express.Router();

const User = require("../models/Users");

const jwt = require("jsonwebtoken");

const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const secret = "qwertyuiop";

router.post(
  "/createuser",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        return res
          .status(400)
          .json({ error: "User already exists with this email" });
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
      res.json({ jwtData });
      // console.log(jwtData);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

module.exports = router;

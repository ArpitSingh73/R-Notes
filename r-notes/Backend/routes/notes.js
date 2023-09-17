const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser");
const { body, validationResult } = require("express-validator");
const Note = require("../models/Notes");





router.post(
  "/addnote",
  fetchUser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Must be of atleast 5 characters").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Note({ title, description, tag, user: req.user.id });
      const saved = await note.save();
      res.json(saved);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);



router.put("/update/:id", fetchUser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    const newnote = {};
    if (title) {
      newnote.title = title;
    }
    if (description) {
      newnote.description = description;
    }
    if (tag) {
      newnote.tag = tag;
    }

    let note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404).send("Not found");
    }

    if (note.user.toString() !== req.user.id) {
      return req.status(401).send("Not allowed");
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newnote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});


module.exports = router;
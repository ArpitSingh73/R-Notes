const mongoose = require("mongoose");
const { Schema } = mongoose;

const notesSchema = new Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "Users",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },

  tag: {
    type: String,
    default: "General",
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Notes", notesSchema);

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const notesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  tags: [{ type: String, require: true }],
  desc: { type: String, required: true }
});

const notes = mongoose.model("notes", notesSchema);

module.exports = notes;

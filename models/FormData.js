const mongoose = require("mongoose");

const FormDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  project: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("FormData", FormDataSchema);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const FormData = require("./models/FormData");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.post("/submit-form", async (req, res) => {
  const { name, email, project, description } = req.body;

  try {
    const newEntry = new FormData({ name, email, project, description });
    await newEntry.save();
    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Failed to submit form", error: err });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

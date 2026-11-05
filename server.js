const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Default route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running successfully11!",
  });
});

// Port
const PORT = process.env.PORT || 7000;

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
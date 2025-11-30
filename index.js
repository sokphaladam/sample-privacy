const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Serve static files (CSS)
app.use(express.static("public"));

// Set up view engine for HTML
app.set("view engine", "html");
app.engine("html", require("fs").readFileSync);

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/privacy-policy", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "privacy-policy.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

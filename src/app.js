const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const db = require("./config/database");
const restaurantRoutes = require("./routes/restaurantRoutes");

// Middleware
app.use(bodyParser.json());
app.use("/api/restaurant", restaurantRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message,
    },
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Enable all CORS requests
app.use(cors());

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const productsRoutes = require("./routes/productsRoutes");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.json({
    message: "Chronos Atelier Backend is running 🚀",
  });
});

// Products Routes
app.use("/api/products", productsRoutes);

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
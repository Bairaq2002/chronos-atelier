const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

// Routes
const productsRoutes = require("./routes/productsRoutes");
const authRoutes = require("./routes/authRoutes");
const ordersRoutes = require("./routes/ordersRoutes");

// Express App
const app = express();

// Configuration
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
    ],
  })
);

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Chronos Atelier Backend is running!",
  });
});

// API Routes
app.use("/api/products", productsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/orders", ordersRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    message: "Route nicht gefunden",
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Server error:", err);

  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json({
    message: "Interner Serverfehler",
  });
});

// Connect to MongoDB, then start the server
async function startServer() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(
        `Chronos Atelier Backend läuft auf http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error(
      "Backend konnte nicht gestartet werden:",
      error.message
    );

    process.exit(1);
  }
}

startServer();
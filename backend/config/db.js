const mongoose = require("mongoose");

async function connectDB() {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI fehlt in der .env-Datei");
  }

  await mongoose.connect(process.env.MONGODB_URI);

  console.log("MongoDB erfolgreich verbunden");
}

module.exports = connectDB;
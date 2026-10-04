const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: "Chronos Classic Black",
    category: "Herren",
    price: 249.99,
    image: "/watches/watch1.jpg",
    description: "Elegante Herrenuhr mit klassischem schwarzen Zifferblatt."
  },
  {
    id: 2,
    name: "Chronos Gold Edition",
    category: "Herren",
    price: 329.99,
    image: "/watches/watch2.jpg",
    description: "Hochwertige Uhr mit edlen Goldakzenten für einen stilvollen Auftritt."
  },
  {
    id: 3,
    name: "Chronos Elegant Rose",
    category: "Damen",
    price: 279.99,
    image: "/watches/watch3.jpg",
    description: "Elegante Damenuhr mit modernem Design und feinen Details."
  }
];

app.get("/", (req, res) => {
  res.json({
    message: "Chronos Atelier Backend läuft!"
  });
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend läuft auf http://localhost:${PORT}`);
});
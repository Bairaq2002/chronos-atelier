const products = require("../data/products");

// GET /api/products
const getProducts = (req, res) => {
  res.json(products);
};

// GET /api/products/:id
const getProductById = (req, res) => {
  const productId = Number(req.params.id);

  const product = products.find((item) => item.id === productId);

  if (!product) {
    return res.status(404).json({
      message: "Produkt nicht gefunden",
    });
  }

  res.json(product);
};

// POST /api/products
const createProduct = (req, res) => {
  const { name, category, price, image, description } = req.body;

  if (!name || !category || !price || !image || !description) {
    return res.status(400).json({
      message: "Alle Produktdaten sind erforderlich",
    });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    category,
    price: Number(price),
    image,
    description,
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
};

// PUT /api/products/:id
const updateProduct = (req, res) => {
  const productId = Number(req.params.id);

  const product = products.find((item) => item.id === productId);

  if (!product) {
    return res.status(404).json({
      message: "Produkt nicht gefunden",
    });
  }

  const { name, category, price, image, description } = req.body;

  if (!name || !category || !price || !image || !description) {
    return res.status(400).json({
      message: "Alle Produktdaten sind erforderlich",
    });
  }

  product.name = name;
  product.category = category;
  product.price = Number(price);
  product.image = image;
  product.description = description;

  res.json(product);
};

// DELETE /api/products/:id
const deleteProduct = (req, res) => {
  const productId = Number(req.params.id);

  const productIndex = products.findIndex(
    (item) => item.id === productId
  );

  if (productIndex === -1) {
    return res.status(404).json({
      message: "Produkt nicht gefunden",
    });
  }

  const deletedProduct = products.splice(productIndex, 1);

  res.json({
    message: "Produkt erfolgreich gelöscht",
    product: deletedProduct[0],
  });
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
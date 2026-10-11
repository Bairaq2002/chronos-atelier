const orders = require("../data/orders");

const createOrder = (req, res) => {
  try {
    const { items, totalPrice, shippingAddress } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        message: "Der Warenkorb ist leer.",
      });
    }

    const safeItems = items.map((item) => ({
      productId: Number(item.id),
      name: item.name,
      image: item.image,
      price: Number(item.price),
      quantity: Number(item.quantity),
    }));

    const invalidItem = safeItems.some(
      (item) =>
        !Number.isInteger(item.productId) ||
        !item.name ||
        !Number.isFinite(item.price) ||
        item.price < 0 ||
        !Number.isInteger(item.quantity) ||
        item.quantity < 1
    );

    if (invalidItem) {
      return res.status(400).json({
        message: "Ungültige Produktdaten.",
      });
    }

    // Preise immer serverseitig aus den Produktdaten ermitteln.
    const products = require("../data/products");

    let calculatedTotal = 0;

    for (const item of safeItems) {
      const product = products.find(
        (product) => product.id === item.productId
      );

      if (!product) {
        return res.status(400).json({
          message: `Produkt nicht gefunden: ${item.name}`,
        });
      }

      item.price = Number(product.price);
      calculatedTotal += item.price * item.quantity;
    }

    const newOrder = {
      id: Date.now().toString(),
      userId: req.user.id,
      items: safeItems,
      totalPrice: Number(calculatedTotal.toFixed(2)),
      shippingAddress: shippingAddress || {},
      status: "Bestellung eingegangen",
      createdAt: new Date().toISOString(),
    };

    orders.push(newOrder);

    return res.status(201).json({
      message: "Bestellung erfolgreich erstellt.",
      order: newOrder,
    });
  } catch (error) {
    console.error("Create order error:", error);

    return res.status(500).json({
      message: "Bestellung konnte nicht erstellt werden.",
    });
  }
};

const getMyOrders = (req, res) => {
  const userOrders = orders
    .filter((order) => order.userId === req.user.id)
    .sort(
      (a, b) =>
        new Date(b.createdAt) - new Date(a.createdAt)
    );

  return res.json(userOrders);
};

module.exports = {
  createOrder,
  getMyOrders,
};
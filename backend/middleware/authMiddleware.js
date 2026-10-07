const jwt = require("jsonwebtoken");

const JWT_SECRET =
  process.env.JWT_SECRET || "chronos-atelier-secret";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Kein Token vorhanden",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Ungültiger oder abgelaufener Token",
    });
  }
};

module.exports = authMiddleware;
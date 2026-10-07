const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const users = require("../data/users");

const JWT_SECRET = process.env.JWT_SECRET || "chronos-atelier-secret";

// POST /api/auth/register
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, E-Mail und Passwort sind erforderlich",
      });
    }

    const existingUser = users.find(
      (user) => user.email === email
    );

    if (existingUser) {
      return res.status(409).json({
        message: "Benutzer existiert bereits",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: users.length + 1,
      name,
      email,
      password: hashedPassword,
    };

    users.push(newUser);

    res.status(201).json({
      message: "Registrierung erfolgreich",
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Serverfehler",
    });
  }
};

// POST /api/auth/login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "E-Mail und Passwort sind erforderlich",
      });
    }

    const user = users.find(
      (item) => item.email === email
    );

    if (!user) {
      return res.status(401).json({
        message: "E-Mail oder Passwort ist falsch",
      });
    }

    const passwordIsCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordIsCorrect) {
      return res.status(401).json({
        message: "E-Mail oder Passwort ist falsch",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.json({
      message: "Login erfolgreich",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Serverfehler",
    });
  }
};

// GET /api/auth/profile
const getProfile = (req, res) => {
  const user = users.find((item) => item.id === req.user.id);

  if (!user) {
    return res.status(404).json({
      message: "Benutzer nicht gefunden",
    });
  }

  res.json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
};

module.exports = {
  register,
  login,
  getProfile,
};
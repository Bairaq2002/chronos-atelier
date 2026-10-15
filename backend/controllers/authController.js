const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET fehlt in der .env-Datei");
}

// POST /api/auth/register
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !password
    ) {
      return res.status(400).json({
        message: "Name, E-Mail und Passwort sind erforderlich",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: "Das Passwort muss mindestens 8 Zeichen enthalten",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await User.findOne({
      email: normalizedEmail,
    });

    if (existingUser) {
      return res.status(409).json({
        message: "Benutzer existiert bereits",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "Registrierung erfolgreich",
      user: {
        id: newUser._id.toString(),
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Registrierungsfehler:", error);

    if (error.code === 11000) {
      return res.status(409).json({
        message: "Benutzer existiert bereits",
      });
    }

    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Die eingegebenen Daten sind ungültig",
      });
    }

    return res.status(500).json({
      message: "Serverfehler bei der Registrierung",
    });
  }
};

// POST /api/auth/login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      !email.trim() ||
      !password
    ) {
      return res.status(400).json({
        message: "E-Mail und Passwort sind erforderlich",
      });
    }

    const user = await User.findOne({
      email: email.trim().toLowerCase(),
    }).select("+password");

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
        id: user._id.toString(),
        email: user.email,
      },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return res.json({
      message: "Login erfolgreich",
      token,
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Loginfehler:", error);

    return res.status(500).json({
      message: "Serverfehler beim Login",
    });
  }
};

// GET /api/auth/profile
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "Benutzer nicht gefunden",
      });
    }

    return res.json({
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Profilfehler:", error);

    if (error.name === "CastError") {
      return res.status(404).json({
        message: "Benutzer nicht gefunden",
      });
    }

    return res.status(500).json({
      message: "Profil konnte nicht geladen werden",
    });
  }
};

module.exports = {
  register,
  login,
  getProfile,
};
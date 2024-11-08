const JWT = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");

const generateToken = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: "Username/Password are required" });
  }

  try {
    const user = await User.findOne({ where: { username } });
    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    const token = JWT.sign({ id: user.id, username }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const refreshToken = async (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.status(400).json({ error: "Token is required" });
  }

  try {
    const { id, username } = JWT.verify(token, process.env.JWT_SECRET);
    const newToken = JWT.sign({ id, username }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token: newToken });
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: "Invalid or expired token" });
  }
};

module.exports = { generateToken, refreshToken };

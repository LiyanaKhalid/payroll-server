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
    const accessToken = JWT.sign(
      { id: user.id, username, type: "access" },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    const refreshToken = JWT.sign(
      { id: user.id, username, type: "refresh" },
      process.env.JWT_SECRET,
      { expiresIn: "1w" }
    );
    res.json({ accessToken, refreshToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const refreshToken = async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) {
    return res.status(400).json({ error: "Refresh token is required" });
  }

  try {
    const { id, username } = JWT.verify(refreshToken, process.env.JWT_SECRET);
    const accessToken = JWT.sign(
      { id, username, type: "access" },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ accessToken, refreshToken });
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: "Invalid or expired refresh token" });
  }
};

module.exports = { generateToken, refreshToken };

require("dotenv").config();

const bcrypt = require("bcryptjs");
const User = require("../src/models/user.model");

const createUser = async (username, password) => {
  try {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      throw new Error(`User with username "${username}" already exists.`);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      password_hash: hashedPassword,
    });
    console.log(`User "${username}" created successfully:`, user);
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

// Get the username and password from the command-line arguments
const args = process.argv.slice(2); // Get CLI arguments (skipping the first two items)
if (args.length < 2) {
  console.log("Usage: addUser.js <username> <password>");
  process.exit(1); // Exit if insufficient arguments
}

const [username, password] = args;
createUser(username, password);

const express = require("express");
const database = require("./configs/connection");
const routes = require("./routes");

const app = express();

// Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing
app.use(routes);

// Sync database
database
  .sync()
  .then(() => console.log("Database synced successfully"))
  .catch((err) => console.error("Error syncing database:", err));

module.exports = app;

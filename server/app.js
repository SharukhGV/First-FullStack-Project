// DEPENDENCIES
const express = require("express");
const transactions = require("./models/transactions.js");
const cors = require("cors");

// CONFIGURATION
const app = express();
// MIDDLEWARE
app.use(express.json()); // Parse incoming JSON
app.use(cors()); //This will allow ANY app to make requests to the API.

const transactionsController = require("./controllers/transactions-controller");
app.use("/transactions", transactionsController);





// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Express transactions App");
});
app.use((req, res, next) => {
    console.log("This code runs for every request");
    next();
  });

app.get("/transactions", (req, res) => {
  res.send(transactions);
});

// EXPORT
module.exports = app;
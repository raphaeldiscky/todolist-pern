const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json());

// Routes


// Create todo

// Get all todos

// Get a todo

// Update a todo

// delete a todo

app.listen(5000, () => {
    console.log("server has started on port 5000");
});
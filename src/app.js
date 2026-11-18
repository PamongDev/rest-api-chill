const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//test endpoint

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Chill API",
    });
});

module.exports = app;
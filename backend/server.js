const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./src/database/db");
const errorHandler = require("./src/middlewares/errorMiddleware");

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(express.json()); 
app.use(cors()); 
app.use(morgan("dev"));

app.get("/error", (req, res, next) => {
    const err = new Error("This is a sample error!");
    res.status(500);
    next(err);
});

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

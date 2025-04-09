const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./src/database/db")
const errorHandler = require("./src/middlewares/errorMiddleware");
const userRoutes = require("./src/routes/userRoutes");
const uploadRoutes = require("./src/routes/uploadRoutes");

require("dotenv").config({
    path:"./src/config/.env"
})

const app = express();

const port = process.env.PORT||8080;
const url = process.env.MONGO_URI;

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/upload", uploadRoutes);

// Serve static uploads
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async() => {
    try {
        await connectDB(url)
        console.log(`Server is running on port ${port}`)
    } catch (error) {
        console,error(error)
    }
});

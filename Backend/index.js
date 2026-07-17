import express from "express";
import dotenv from "dotenv";
import dbConnection from "./dbConfig/index.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import router from "./routes/index.js";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8800;
// Middleware to parse JSON requests
app.use(express.json());

// Define a route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(router);
app.use(errorMiddleware);

app.use(router);
app.use(errorMiddleware);

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

dbConnection();

// Handle server errors
server.on("error", (err) => {
  console.error("Server error:", err);
});

import express from "express";
import dotenv from "dotenv";
import mongoose, { mongo } from "mongoose";
import playerRoutes from "./routes/playerRoute.js";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

const app = express();
dotenv.config();

const mongodbURL = process.env.MongoDB_URI;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(206).send("Welcome ro MERN!");
});

mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`app listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/player", playerRoutes);
app.use("/api/auth", userRoute);

// if all routes doesnt work, create middleware for error handling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    message,
    statusCode: statusCode,
  });
});

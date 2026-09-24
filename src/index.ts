import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Poster Maker server is running!");
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running  on port ${PORT}`);
});

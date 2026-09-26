import "dotenv/config";
import cors from "cors";
import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import templateRoutes from "./routes/templateRoutes.js";
import posterRoutes from "./routes/posterRoutes.js";

const app = express();
app.set("trust proxy", 1);
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "https://poster-maker-frontend.vercel.app",
    credentials: true,
  }),
);

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/templates", templateRoutes);
app.use("/api/posters", posterRoutes);

app.get("/", (req, res) => {
  res.send("Poster Maker server is running!");
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running  on port ${PORT}`);
});

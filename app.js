import express from "express";
import passport from "passport";
import authRoutes from "./routes/auth.js";
import analyticsRoutes from "./routes/analytics.js";
import categoryRoutes from "./routes/category.js";
import orderRoutes from "./routes/order.js";
import positionRoutes from "./routes/position.js";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import * as keys from "./config/keys.js";
import passportConfig from "./middleware/passport.js"; // убедитесь, что путь верный

const app = express();

// Подключение к MongoDB
mongoose
  .connect(keys.mongoURI)
  .then(() => console.log("MongoDB is connected"))
  .catch((error) => console.log(error));

// Настройка Passport.js
app.use(passport.initialize());
passportConfig(passport);

// Middleware
app.use(morgan("combined"));
app.use(cors());
app.use(express.json());

// Маршруты
app.use("/api/auth", authRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/position", positionRoutes);

export default app;

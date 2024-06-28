import express from "express";
import authRoutes from "./Routes/auth.js";
import analyticsRoutes from "./Routes/analytics.js";
import categoryRoutes from "./Routes/category.js";
import orderRoutes from "./Routes/order.js";
import positionRoutes from "./Routes/position.js";
import cors from "cors";
// для обработки cors запросов(в случае когда клиент и сервер на разных доменах)
import morgan from "morgan";
// для более красивого логирования определенные запросы, т.е. смотреть что происходит с сервером в данный момент
import mongoose from "mongoose";
import *as keys from "./config/keys.js";


const app = express();
mongoose
  .connect(keys.mongoURI)
  .then(() => console.log("MongoDB is conected"))
  .catch(() => console.log(error));

app.use(morgan("combined"));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/analytics", analyticsRoutes);
0;
app.use("/api/category", categoryRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/position", positionRoutes);

export default app;

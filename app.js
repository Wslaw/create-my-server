import express from "express";
import authRoutes from "./routes/auth.js";
import analyticsRoutes from "./routes/analytics.js";
import categoryRoutes from "./routes/category.js";
import orderRoutes from "./routes/order.js";
import positionRoutes from "./routes/position.js";

const app = express();

app.use("/api/auth", authRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/position", positionRoutes);

export default app;

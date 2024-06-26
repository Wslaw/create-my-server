import express from "express";
import *as controller from "../controllers/order.js";
const router = express.Router();

router.post("/", controller.getAll);
router.post("/", controller.create);

export default router;

import express from "express";
import *as controller from "../controllers/position.js";
const router = express.Router();

router.post("/:id", controller.getByCategoryId);
router.post("/", controller.create);
router.post("/:id", controller.update);
router.post("/:id", controller.remove);

export default router;

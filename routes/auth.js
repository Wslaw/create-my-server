import express from "express";
import *as controller from "../controllers/auth.js";
const router = express.Router();

// localhost:5000/api/auth/login
router.post('/login', controller.login)
// localhost:5000/api/auth/register
router.post('/register', controller.register)

export default router;
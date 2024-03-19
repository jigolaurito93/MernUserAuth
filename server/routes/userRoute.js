import express from "express";
import { getUsers, login, register } from "../controllers/userController.js";

const router = express.Router();

// Register user
router.post("/signup", register);
// Login user
router.post("/signin", login);

router.get("/", getUsers);

export default router;

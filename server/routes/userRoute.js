import express from "express";
import { getUsers, register } from "../controllers/userController.js";

const router = express.Router();

router.post("/", register);
router.get("/", getUsers);

export default router;

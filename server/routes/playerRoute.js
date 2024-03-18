import express from "express";
import {
  addPlayer,
  deletePlayer,
  getPlayer,
  getPlayers,
  updatePlayer,
} from "../controllers/playerController.js";

const router = express.Router();

router.post("/", addPlayer);
router.get("/", getPlayers);
// GET single player
router.get("/:id", getPlayer);
// UPDATE single player
router.put("/:id", updatePlayer);
// DELETE single player
router.delete("/:id", deletePlayer);

export default router;

import Player from "../models/playerModel.js";

export const addPlayer = async (req, res) => {
  const { firstName, lastName, team } = req.body;
  const newPlayer = new Player({ firstName, lastName, team });
  await newPlayer.save();
  res.json({ message: "Added player" });
};

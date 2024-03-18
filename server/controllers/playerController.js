import Player from "../models/playerModel.js";

// POST a player
export const addPlayer = async (req, res) => {
  const { firstName, lastName, team } = req.body;
  const newPlayer = new Player({ firstName, lastName, team });
  await newPlayer.save();
  res.json({ message: "Added player" });
};

// GET all players
export const getPlayers = async (req, res) => {
  const players = await Player.find({});
  return res.status(200).json(players);
};

// GET a single player
export const getPlayer = async (req, res) => {
  const { id } = req.params;
  const player = await Player.findById(id);
  return res.status(200).json(player);
};

// UPDATE a player
export const updatePlayer = async (req, res) => {
  const { id } = req.params;
  const player = await Player.findByIdAndUpdate(id, req.body);
  return res.status(200).json(player);
};

// DELETE a player
export const deletePlayer = async (req, res) => {
  const { id } = req.params;
  try {
    const player = await Player.findByIdAndDelete(id);

    if (!res) {
      return res.status(404).json({ message: "Player not found" });
    }
    return res.status(200).send("Player deleted successfully");
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

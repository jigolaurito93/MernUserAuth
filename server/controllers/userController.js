import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPW = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPW });
  try {
    await newUser.save();
    res.json({ success: "Successfully registered" });
  } catch (error) {
    res.status(404).json(error.message);
  }
};

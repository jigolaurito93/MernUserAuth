import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";

export const register = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPW = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPW });
  try {
    await newUser.save();
    res.json({ success: "Successfully registered" });
  } catch (error) {
    next(error);
  }
};

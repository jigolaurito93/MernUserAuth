import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

// POST a user - Register the user
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

export const login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const validUser = await User.findOne({ username });
    if (!validUser) return next(errorHandler(404, "User not found"));

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Invalid Credentials"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    // separate password from the rest of user credentials to hide password from client side
    const { password: hashedPW, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

// GET all users
export const getUsers = async (req, res) => {
  const users = await User.find({});
  return res.status(200).json(users);
};

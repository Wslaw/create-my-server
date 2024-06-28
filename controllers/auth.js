import bcriptjs from "bcryptjs";

import User from "../models/User.js";

export const login =  (req, res) => {
   res.status(200).json({
    login: {
      email: req.body.email,
      password: req.body.password,
    },
  });
};

export const register = async (req, res) => {
  // email   password
  const candidate = await User.findOne({ email: req.body.email });
  if (candidate) {
    // User exists  & need send error

    // res.status(409).json({
    //   message:"already exists",
    // });
    res.status(409).json(` ${candidate.email} alredy exists`);
  } else {
    // Need create new User
    const salt = bcriptjs.genSaltSync(10);
    const password = req.body.password;
    const user = new User({
      email: req.body.email,
      password: bcriptjs.hashSync(password, salt),
    });
    // To save in base "users"- async -
    try {
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      // error must be handled
    }
  }
};

import bcriptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import *as keys from "../config/keys.js"

import User from "../models/User.js";


export const login = async (req, res) => {
  
  const candidate = await User.findOne({email:req.body.email})

  if (candidate) {
    // Робимо перевірку паролю
    const passwordResult = bcriptjs.compareSync(req.body.password, candidate.password);
if (passwordResult) {
  // Генерація токена, паролі збіглися
  const token = jwt.sign({
    email: candidate.email,
    userId:candidate._id
  },keys.jwt,{expiresIn:60*60});

  res.status(200).json({
    token: `Bearer ${token}`,
  });
} else {
  // Паролі не збіглися
  res.status(401).json({ message:"Passwords not match. Try again!"})
}


  } else {
    // Помилка-такого user-а немає
    res.status(404).json({message:"User is not correct"})
  }
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

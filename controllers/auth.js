import User from "../models/User.js";

export const login = (req, res) => {
  res.status(200).json({
    login: {
      email: req.body.email,
      password: req.body.password,
    },
  });
};

export const register = (req, res) => {
  // email   password
};

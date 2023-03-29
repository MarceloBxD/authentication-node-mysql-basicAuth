const User = require("../models/User");

const login = async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({
    where: {
      email,
      password,
    },
  });

  if (user) {
    return res.json({ message: "success" });
  }

  return res.status(400).json({ error: "User not found" });
};

const register = async (req, res) => {
  const { email, password } = req.body;

  let userExists = await User.findOne({
    where: {
      email,
    },
  });

  if (userExists) {
    return res.status(400).json({ error: "User already exists" });
  }

  const user = await User.create({
    email,
    password,
  });

  return res.status(201).json(user);
};

const list = async (req, res) => {
  let users = await User.findAll();
  let data = [];

  for (let i in users) {
    data.push({
      id: users[i].id,
      email: users[i].email,
      password: users[i].password,
    });
  }

  return res.json(data);
};

module.exports = {
  login,
  register,
  list,
};

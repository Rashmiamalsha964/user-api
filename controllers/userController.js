const User = require("../models/User");



exports.createUser = async (req, res) => {
  try {
    if (!req.body.name || !req.body.email) {
      return res.status(400).json({ message: "Empty data not allowed" });
    }

    const user = await User.create(req.body);

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};;

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: "Invalid ID" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted" });
  } catch (err) {
    res.status(400).json({ message: "Invalid ID" });
  }
};
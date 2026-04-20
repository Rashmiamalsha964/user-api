const express = require("express");
const router = express.Router();

const {
  createUser,
  getUsers,
  getUserById,
  deleteUser
} = require("../controllers/userController");

router.post("/users", createUser);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUser);

module.exports = router;
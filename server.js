const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/usersDB");

app.use("/", require("./routes/userRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
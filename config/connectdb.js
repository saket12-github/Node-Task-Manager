const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/node-task-manager";

async function connectDB() {
  await mongoose.connect(MONGODB_URI);
  console.log("Connection to local DB - node-task-manager");
}

module.exports = connectDB;

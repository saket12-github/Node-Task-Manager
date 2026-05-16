const express = require("express");
const app = express();
const TaskRoutes = require("./routes/task.route");
const connectDB = require("./config/connectdb");
require('dotenv').config()

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/tasks", TaskRoutes);

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server running on Port 3000");
    });
  })
  .catch((err) => {
    console.error("Failed to start:", err.message);
    process.exit(1);
  });

const Tasks = require('../models/tasks.model')

const homePage = async (req, res) => {
  res.status(200)
  res.json("Hello, This is Task Manager App");
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find({});
    res.status(200).json({
      success: true,
      data: tasks
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: error.message
    });
  }
};
const getSingleTask = async (req, res) => {
  res.send("hello");
};
const createTask = async (req, res) => {
  res.send("hello");
};
const updateTask = async (req, res) => {
  res.send("hello");
};
const deleteTask = async (req, res) => {
  res.send("hello");
};

module.exports = {
  homePage,
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};

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
  try {
    const { id: taskID } = req.params;
    const task = await Tasks.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found'
      })
    }
    res.status(200).json({
      success: true,
      data: task
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
};
const createTask = async (req, res) => {
  try {
    const task = await Tasks.create(req.body);
    res.status(201).json({
      success: true,
      data: task
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
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

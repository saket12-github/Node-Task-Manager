const homePage = async (req, res) => {
  res.send("Hello, This is Task Manager App");
};
const getAllTasks = async (req, res) => {
  res.send("hello");
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

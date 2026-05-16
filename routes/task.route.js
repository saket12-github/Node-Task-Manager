const express = require('express')
const router = express.Router()
const { homePage, getAllTasks, getSingleTask, createTask, updateTask, deleteTask } = require('../controllers/task.controller')

router.get('/', homePage);
router.get('/allTasks', getAllTasks);
router.get('/getTask/:id', getSingleTask);
router.post('/createTask', createTask);
router.put('/updateTask/:id', updateTask);
router.delete('/deleteTask/:id', deleteTask);

module.exports = router;

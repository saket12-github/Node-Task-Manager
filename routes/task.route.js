const express = require('express')
const router = express.Router()
const { homePage, getAllTasks, getSingleTask, createTask, updateTask, deleteTask} = require('../controllers/task.controller')

router.get('/', homePage);
router.get('/allTasks', getAllTasks);
router.get('/getTask', getSingleTask);
router.post('/createTask', createTask);
router.put('/updateTask', updateTask);
router.delete('/deleteTask', deleteTask);

module.exports = router;

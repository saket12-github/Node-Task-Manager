const express = require('express')
const app = express()
const TaskRoutes = require('./routes/task.route')

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/tasks', TaskRoutes)


app.listen(3000, () => {
    console.log('Server running on Port 3000')
});

const mongoose = require('mongoose')

const taskSchema = mongoose.Schema(
    {
        taskName: {
            type: String,
            required: [true, "Task name is required"]
        },
        status: {
            type: Boolean,
            required: [true, "Status is required, please enter, unfinished or finished"]
        }
    },
    {
        timestamps: true
    }
);

const Tasks = mongoose.model('Task', taskSchema);

module.exports = Tasks;
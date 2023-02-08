const mongoose = require('mongoose');

//description
const TodoItemSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    isImportant: {
        type: Boolean,
        required: true,
        default: false
    }

})

module.exports = mongoose.model('todo', TodoItemSchema);

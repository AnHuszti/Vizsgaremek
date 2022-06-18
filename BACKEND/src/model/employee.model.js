const mongoose = require('mongoose')

const EmployeeSchema = mongoose.Schema({
    surname: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    kindergarten: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    group: {
        type: String,
        required: false,
    },
    skills: {
        type: String,
        required: false,
    },
    active: {
        type: Boolean,
        default: true,
    }, 
    image: {
        type: String
    }
}, {
    timestamps: true
}
)

module.exports = mongoose.model('Employee', EmployeeSchema)
const mongoose = require('mongoose')


const GroupSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    kindergarten: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Kindergarten',
        reqired: true
    },
    teacherFirst: {
        type: String,
        required: true,
    },
    teacherSecond: {
        type: String,
        required: true,
    },
    nurse: {
        type: String,
        required: true,
    },
    ageGroup: {
        type: String,
        required: true,
    },
    maxHeadcount: {
        type: Number,
        required: true,
    },
    actualHeadcount: {
        type: Number,
        required: true,
    },
    active: {
        type: Boolean,
        default: true,
    },
    image: {
        type: String,
        required: false,
    },
    children: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Child'
        }
    ],
    employees: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
        }
    ]
}, {
    timestamps: true
})

module.exports = mongoose.model('Group', GroupSchema)
const mongoose = require('mongoose')
// const idValidator = require('mongoose-id-validator')


const KindergartenSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                return /^[a-űA-Ű]{2,25}$/.test(value)
            }
        }
    },
    address: {
        type: String,
        required: true,
    },
    numOfEmployees: {
        type: Number,
        required: true,
    },
    numOfGroups: {
        type: Number,
        required: true,
    },
    maxHeadcountOfChildren: {
        type: Number,
        required: true,
    },
    actualHeadcountOfChildren: {
        type: Number,
        required: true,
    },
    employees: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Employee'
        }
    ],
    children: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Child'
        }
    ],
    groups: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Group'
        }
    ]
})

module.exports = mongoose.model('Kindergarten', KindergartenSchema)
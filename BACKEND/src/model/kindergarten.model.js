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
    ],
    groups: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Group'
        }
    ],
    specialclasses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SpecialClass'
        }
    ]
}, {
    timestamps: true
})

module.exports = mongoose.model('Kindergarten', KindergartenSchema)
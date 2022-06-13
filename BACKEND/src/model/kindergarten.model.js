const mongoose = require('mongoose')

const KindergartenSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
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
})

module.exports = mongoose.model('Kindergarten', KindergartenSchema)
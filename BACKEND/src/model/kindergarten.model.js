const mongoose = require('mongoose')
// const idValidator = require('mongoose-id-validator')


const KindergartenSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^[a-űA-Ű \-\.]{5,25}$/.test(v)
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
})

module.exports = mongoose.model('Kindergarten', KindergartenSchema)
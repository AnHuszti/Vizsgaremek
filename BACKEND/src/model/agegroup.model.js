const mongoose = require('mongoose')
//const idValidator = require('mongoose-id-validator')


const AgeGroupSchema = mongoose.Schema({
    age: {
        type: Array,
        required: true,
    },
    ageGroup: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('AgeGroup', AgeGroupSchema)
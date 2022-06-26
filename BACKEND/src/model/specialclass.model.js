const mongoose = require('mongoose')

const SpecialClassSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: false,
    },
    kindergarten: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Kindergarten',
        reqired: true
    },
    teacher: {
        type: String,
        required: true,
    },
    day: {
        type: String,
        required: true,
    },
    maxHeadcount: {
        type: Number,
        required: false,
    },
    actualHeadcount: {
        type: Number,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('SpecialClass', SpecialClassSchema)
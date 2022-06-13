const mongoose = require('mongoose')
//const idValidator = require('mongoose-id-validator')


const ChildSchema = mongoose.Schema({
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
    /* group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        required: true,
    }, */
    group: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    mothername: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: true,
    }
}, {
    timestamps: true
})

//ChildSchema.plugin(idValidator)

module.exports = mongoose.model('Child', ChildSchema)
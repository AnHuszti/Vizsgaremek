const mongoose = require('mongoose')
//const idValidator = require('mongoose-id-validator')


const ChildSchema = mongoose.Schema({
    surname: {
        type: String,
        required: true,
        /* validate: {
            validator: function(value) {
                return /^[a-űA-Ű \-\.]{3,25}$/.test(value)
            }
        } */
    },
    firstname: {
        type: String,
        required: true,
    },
    kindergarten: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Kindergarten',
        reqired: true
    },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        required: true
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
        required: false,
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
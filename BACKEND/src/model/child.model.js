const mongoose = require('mongoose')
//const idValidator = require('mongoose-id-validator')


const ChildSchema = mongoose.Schema({
    surname: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                return /^[a-űA-Ű \-\.]{5,25}$/.test(value)
            }
        }
    },
    firstname: {
        type: String,
        required: true,
    },
    kindergarten: {
        type: String,
        required: true,
        enum: ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zéta", "Théta", "Iota", "Kappa", "Lambda"],
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
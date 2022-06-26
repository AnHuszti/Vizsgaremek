const mongoose = require('mongoose')
const idValidator = require('mongoose-id-validator');
//const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10 // password strength

const UserSchema = mongoose.Schema({
    surname: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[a-űA-ű\.\-]{2,25}$/.test(v);
            }
        }
    },
    firstname: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[a-űA-ű\.\-]{2,25}$/.test(v);
            }
        }
    },
    email: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    role: Number
})

UserSchema.plugin(require('mongoose-bcrypt'))

UserSchema.plugin(idValidator)

module.exports = mongoose.model('User', UserSchema)
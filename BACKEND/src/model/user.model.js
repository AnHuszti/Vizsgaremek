const mongoose = require('mongoose')
//const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10 // password strength

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    lastName: String,
    firstName: String,
})

UserSchema.plugin(require('mongoose-bcrypt'))



/* UserSchema.pre('save', function(next) {
    const user = this
    if (!user.isModified('password')) {   
        return next()
    }
    // Titkosítás:
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) {
            return next(err)
        }
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err)
            }

            user.password = hash
            next()
        })
    })
})

//Bejelentkező password összehasonlítása a userhez tartozó jelszóval:
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    // cb = callback
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) {
            return cb(err)
        }

        cb(null, isMatch)
    })
} */

module.exports = mongoose.model('User', UserSchema)
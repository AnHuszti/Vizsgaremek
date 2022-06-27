const express = require('express');
const User = require('../../model/user.model');
const jwt = require('jsonwebtoken')
const createError = require('http-errors')

const router = express.Router();


router.post('/', async (req, res, next) => {
    
    const { email, password } = req.body
    const user = await User.findOne({email})
    
    if (!user) {
        return next(new createError.Unauthorized('Invalid email or password'));
    }
    
    const valid = user.verifyPasswordSync(password)
    
    if (valid) {
        
        const accessToken = jwt.sign({
            _id: user._id,
            email: user.email,
            role: user.role,
        }, `${process.env.ACCESS_TOKEN_SECRET}`, {
            expiresIn: '1h'
        })

        res.json({ success: true, accessToken, user: {...user._doc, password: ''} 
        })
    } else {
        return next(new createError.Unauthorized('Invalid email or password'))
    }

})

module.exports = router
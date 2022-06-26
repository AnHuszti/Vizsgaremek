const express = require('express');
const User = require('../../model/user.model');
const jwt = require('jsonwebtoken')
const createError = require('http-errors')

const router = express.Router();

//post
router.post('/', async (req, res, next) => {
    console.log(`router:${req.body.email}${req.body.password}`);
    const { email, password } = req.body
    const user = await User.findOne({email})
    
    if (!user) {
        return next(new createError.Unauthorized('Invalid email or password'));
    }
    
    console.log(`router2: ${req.body.password}`);
    const valid = user.verifyPasswordSync(password)
    
    if (valid) {
        console.log(valid);
        const accessToken = jwt.sign({
            _id: user._id,
            email: user.email,
            role: 1,
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
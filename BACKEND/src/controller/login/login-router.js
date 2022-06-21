const express = require('express');
const User = require('../../model/user.model');
const jwt = require('jsonwebtoken')
//const createError = require('http-errors')

const router = express.Router();

//post
router.post('/', async (req, res, next) => {
    /* const newUser = new User({
        email: 'test@test.hu',
        lastName: 'Test',
        firstName: 'Elek',
        password: 'eztestpw'
    })

    try {
        await newUser.save();
    } catch (error) {
        res.statusCode = 401
        res.json({error: 'Adatbázis hiba!'})
    }
    return res.json({message: 'user created'}); */

    const { email, password } = req.body
    const user = await User.findOne({email})

    if (!user) {
        return res.sendStatus(404)
    }

    const valid = user.verifyPasswordSync('password')
    if (valid) {
        const accessToken = jwt.sign({
            _id: user._id,
            email: user.email,
            role: 1,
        }, 'secrettext', {
            expiresIn: '1h'
        })

        res.json({ success: true, accessToken, user: {...user._doc, password: ''} 
        })
    } else {
        return res.sendStatus(401)
    }

    /* user.comparePassword(password, (err, isMatch) => {
        if (err) {
            return res.sendStatus(403)
        }

        const accessToken = jwt.sign({
            _id: user._id,
            email: user.email,
            role: 1,
        }, 'secrettext', {
            expiresIn: '1h'
        })

        res.json({ success: true, accessToken, user: {...user._doc, password: ''} })
    }) */
})

module.exports = router
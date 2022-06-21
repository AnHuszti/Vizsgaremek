const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization

    if(authHeader) {
        //Bearer: ffiztfzkkjio98hj7.87tguz
        const token = authHeader.split(' ')[1]
        jwt.verify(token, 'secrettext', (err, user) => {
            if (err) {
                res.send(403)
            }

            req.user = user
            next()
        })
    } else {
        res.sendStatus(401)
    }
}
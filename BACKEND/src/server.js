const express = require('express')
const config = require('config')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const {join} = require('path')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')

const swaggerDocument = YAML.load('./docs/swagger.yaml')


const app = express()

const { host, user, pass } = config.get('database')
mongoose.connect(`mongodb+srv://${host}`, {
    user,
    pass,
}).then(conn => {
    //require('./seed/seeder')
    console.log('Connection is successfull!')
}
).catch(err => {
    throw new Error(err.message)
})

//Cross origin resource sharing: CORS
app.use(cors()) // connect from other domain
app.use(express.static('public'))
app.use(bodyParser.json())

const authenticateJwt = require('./module/auth/authenticate')

app.use(fileUpload())
app.post('/upload', (req, res) => {
    let uploadFile
    let uploadPath

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.')
    }

    uploadFile = req.files.uploadFile
    uploadPath = join('./public/img', uploadFile.name)

    uploadFile.mv(uploadPath, (err) => {
        if (err)
            return res.status(500).send(err)

        res.json({
            success: true, 
            file: uploadFile.name,
            path: uploadPath.replace(/\\/g, '/').replace('public/', '')
        })
    })
})

app.use('/children', authenticateJwt, require('./controller/child/child-router'))

app.use('/employees', authenticateJwt, require('./controller/employee/employee-router'))

app.use('/groups', authenticateJwt, require('./controller/group/group-router'))

app.use('/kindergartens', /* authenticateJwt, */ require('./controller/kindergarten/kindergarten-router'))

app.use('/specialclasses', /* authenticateJwt, */ require('./controller/specialclass/specialclass-router'))

app.use('/users', authenticateJwt, require('./controller/user/user-router'))

app.use('/login', require('./controller/login/login-router'))


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


app.use('/', (req, res, next) => {
    res.send('api server')
})


app.use((err, req, res, next) => {
    res.status = 500
    res.json({
        hasError: true,
        message: 'Server Error',
    })
})

module.exports = app
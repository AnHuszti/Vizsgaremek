const express = require('express')
const config = require('config')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
//mongoose.Promise = global.Promise -> talán nem kell

const app = express()

/* if (!config.has('database')) {
    logger.error('No database config found.')
    process.exit()
} */

// mongodb+srv://dbUser:SFYyPNUtcFEVYDnX@projectcluster.rrbspej.mongodb.net/?retryWrites=true&w=majority

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


//Children
app.use('/children', require('./controller/child/child-router'))

//Employees
app.use('/employees', require('./controller/employee/employee-router'))

//Groups
app.use('/groups', require('./controller/group/group-router'))

//Kindergartens
app.use('/kindergartens', require('./controller/kindergarten/kindergarten-router'))


//Home
app.use('/', (req, res) => {
    res.send('api server')
})

app.use('/', (req, res, next) => {
    console.log(req.url) //debughoz
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
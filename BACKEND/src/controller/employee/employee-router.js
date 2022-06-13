const express = require('express')
const Employee = require('../../model/employee.model')
const controller = require('../base/base-controller')(Employee)

const router = express.Router()

//get
router.get('/', (req, res, next) => {
    return controller.findAll(req, res, next)
})



module.exports = router
const express = require('express')
const Kindergarten = require('../../model/kindergarten.model')
const controller = require('../base/base-controller')(Kindergarten)

const router = express.Router()

//get
router.get('/', (req, res, next) => {
    return controller.findAll(req, res, next)
})
// Create
router.post('/', (req, res, next) => {
    return controller.create(req, res, next)
})

module.exports = router
const express = require('express')
const Group = require('../../model/group.model')
const controller = require('../base/base-controller')(Group)

const router = express.Router()

//get
router.get('/', (req, res, next) => {
    return controller.findAll(req, res, next)
})
//get one
router.get('/:id', (req, res, next) => {
    return controller.findOne(req, res, next)
})



module.exports = router
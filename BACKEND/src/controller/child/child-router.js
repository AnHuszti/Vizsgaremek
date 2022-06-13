const express = require('express')
const Child = require('../../model/child.model')
const controller = require('../base/base-controller')(Child)

const router = express.Router()

//get
router.get('/', (req, res, next) => {
    return controller.findAll(req, res, next)
})



module.exports = router
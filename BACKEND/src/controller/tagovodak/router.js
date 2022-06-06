const express = require('express')
const Tagovoda = require('../../model/tagovoda')
const controller = require('../base/controller')(Tagovoda)

const router = express.Router()

//get
router.get('/', (req, res, next) => {
    return controller.findAll(req, res, next)
})
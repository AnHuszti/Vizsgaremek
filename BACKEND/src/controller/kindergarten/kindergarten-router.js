const express = require('express')
const Kindergarten = require('../../model/kindergarten.model')
const controller = require('../base/base-controller')(Kindergarten)

const router = express.Router()

//get
router.get('/', (req, res, next) => {
    return controller.findAll(req, res, next)
})
//get one
router.get('/:id', (req, res, next) => {
    return controller.findOne(req, res, next)
})
// Patch
router.patch('/:id', (req, res, next) => {
    return controller.updateOne(req, res, next)
})
// Create
router.post('/', (req, res, next) => {
    console.log(req.body);
    return controller.createOne(req, res, next)
})
// Delete
router.delete('/:id', (req, res, next) => {
    return controller.deleteOne(req, res, next)
})

module.exports = router
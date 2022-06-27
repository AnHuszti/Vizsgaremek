const express = require('express')
const Child = require('../../model/child.model')
const controller = require('../base/base-controller')(Child, ['kindergarten group'])

const router = express.Router()


router.get('/', (req, res, next) => {
    return controller.findAll(req, res, next)
})

router.get('/:id', (req, res, next) => {
    return controller.findOne(req, res, next)
})

router.patch('/:id', (req, res, next) => {
    console.log(`router: ${req.body.kindergarten} ${req.body.surname}`);
    return controller.updateOne(req, res, next)
})

router.post('/', (req, res, next) => {
    console.log(req.body);
    return controller.createOne(req, res, next)
})

router.delete('/:id', (req, res, next) => {
    return controller.deleteOne(req, res, next)
})



module.exports = router
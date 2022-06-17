const express = require('express')
const { updateOne } = require('../../model/child.model')
const baseService = require('./base-service')

module.exports = (model) => {
    const service = baseService(model)
    return {
        findAll: (req, res, next) => {
            return service.findAll()
                .then( list => res.json(list))
        },
        findOne(req, res, next) {
            return service.findOne(req.params.id)
            .then(entity => res.json(entity))
        },
        updateOne(req, res, next) {
            return service.updateOne(req.params.id, req.body)
            .then(entity => res.json(entity))
            .catch(err => {
                res.statusCode = 501
                res.json(err)
            })
        },
        deleteOne(req, res, next) {
            return service.deleteOne(req.params.id)
            .catch(err => {
                res.statusCode = 404 //???
                res.json(err)
            })
        }
    }
}
const express = require('express')
const baseService = require('./base-service')
const createError = require('http-errors')

module.exports = (model) => {
    const service = baseService(model)
    return {
        findAll: (req, res, next) => {
            return service.findAll()
                .then(list => res.json(list))
                .catch( err => next(new createError.BadRequest(err.message)))
        },
        findOne(req, res, next) {
            return service.findOne(req.params.id)
            .then(entity => res.json(entity))
            .catch( err => next(new createError.NotFound(err.message)))
        },
        updateOne(req, res, next) { 
            console.log(`controller: ${req.body.kindergarten} ${req.body.group}`);
            return service.updateOne(req.params.id, req.body)
            .then(entity => res.json(entity))
            .catch(err => next(new createError.InternalServerError(err.message)))
        },
        createOne(req, res, next) {
            console.log(`controller: ${req.body.name}`);
            return service.createOne(req.body)
            .then(entity => res.json(entity))
            .catch(err => next(new createError.InternalServerError(err.message)))
        },
        deleteOne(req, res, next) {
            return service.deleteOne(req.params.id)
            .then(() => res.json({}))
            .catch(err => next(new createError.NotFound(err.message)))
        }
    }
}
const app = require('./server')
const mongoose = require('mongoose')
const supertest = require('supertest')
const config = require('config')
const Kindergarten = require('./model/kindergarten.model')
const { response } = require('jest-mock-req-res') //to mock

describe('REST API integration test', () => {
    beforeEach(done => {
        const { host, user, pass } = config.get('database')
        mongoose.connect(`mongodb+srv://${host}`, {
            user,
            pass,
        }).then(conn => {
            console.log('Connection is successfull!')
            done()
        }).catch(err => {
            throw new Error(err.message)
        })
    })

    afterEach( done => {
        mongoose.connection.close( () => done())
    })

    test('GET /kindergartens', done => {
        supertest(app).get('/kindergartens').expect(200)
        .then( response => {
            expect(Array.isArray(response.body)).toBeTruthy()
            done()
        })
    })
})
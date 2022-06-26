const app = require('./server')
const mongoose = require('mongoose')
const supertest = require('supertest')
const config = require('config')
const Kindergarten = require('./model/kindergarten.model')
const Group = require('./model/group.model')
const Employee = require('./model/employee.model')
const Child = require('./model/child.model')
const SpecialClass = require('./model/specialclass.model')
const User = require('./model/user.model')
const { response } = require('jest-mock-req-res') //to mock
const { Test } = require('supertest')

describe('REST API integration test', () => {
    beforeEach(done => {
        const { host, user, pass } = config.get('database')
        mongoose.connect(`mongodb+srv://${host}`, {
            user,
            pass,
        }).then(conn => {
            console.log('Connection is successfull!')

            supertest(app).post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    email: 'test@pass.com',
                    password: 'testpass'
                })
                .end((err, res) => {
                    token = res.body.accessToken;

                    done()
                })
            })
                .catch(err => {
                    throw new Error(err.message)
                })
        })

        afterEach(done => {
            mongoose.connection.close(() => done())
        })

        test('GET /kindergartens', done => {
            supertest(app).get('/kindergartens')
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
                .then(response => {
                    expect(Array.isArray(response.body)).toBeTruthy()
                    done()
                })
        })

        test('GET /groups', done => {
            supertest(app).get('/groups')
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
                .then(response => {
                    expect(Array.isArray(response.body)).toBeTruthy()
                    done()
                })
        })

        test('GET /employees', done => {
            supertest(app).get('/employees')
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
                .then(response => {
                    expect(Array.isArray(response.body)).toBeTruthy()
                    done()
                })
        })

        test('GET /children', done => {
            supertest(app).get('/children')
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
                .then(response => {
                    expect(Array.isArray(response.body)).toBeTruthy()
                    done()
                })
        })

        test('GET /specialclass', done => {
            supertest(app).get('/specialclass')
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
                .then(response => {
                    expect(Array.isArray(response.body)).toBeTruthy()
                    done()
                })
        })

        test('GET /user', done => {
            supertest(app).get('/user')
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
                .then(response => {
                    expect(Array.isArray(response.body)).toBeTruthy()
                    done()
                })
        })
    })
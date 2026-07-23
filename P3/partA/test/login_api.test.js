const assert = require('node:assert')
const { test, after, beforeEach, describe } = require('node:test')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const User = require('../models/user')

const api = supertest(app)

describe('login', () => {
  beforeEach(async () => {
    await User.deleteMany({})

    const passwordHash = await bcrypt.hash('salainen', 10)
    const user = new User({ username: 'mluukkai', name: 'Matti Luukkainen', passwordHash })

    await user.save()
  })

  test('succeeds with a valid username and password', async () => {
    const credentials = {
      username: 'mluukkai',
      password: 'salainen',
    }

    const result = await api
      .post('/api/login')
      .send(credentials)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    assert(result.body.token)
    assert.strictEqual(result.body.username, credentials.username)
    assert.strictEqual(result.body.name, 'Matti Luukkainen')
  })

  test('fails with statuscode 401 if password is invalid', async () => {
    const credentials = {
      username: 'mluukkai',
      password: 'wrong',
    }

    const result = await api
      .post('/api/login')
      .send(credentials)
      .expect(401)
      .expect('Content-Type', /application\/json/)

    assert.strictEqual(result.body.error, 'invalid username or password')
  })

  test('fails with statuscode 401 if username does not exist', async () => {
    const credentials = {
      username: 'doesnotexist',
      password: 'salainen',
    }

    const result = await api
      .post('/api/login')
      .send(credentials)
      .expect(401)
      .expect('Content-Type', /application\/json/)

    assert.strictEqual(result.body.error, 'invalid username or password')
  })
})

after(async () => {
  await mongoose.connection.close()
})

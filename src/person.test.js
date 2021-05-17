const supertest = require('supertest')
import app from './index'
import "core-js/stable";
import "regenerator-runtime/runtime";

const stest = supertest()

const api = supertest(app)

test('Personas son retornadas en formato JSON', async () =>{
    await api
    .get('/api')
    .expect(200)
    .expect('Content-Type',/application\/json/)
  })
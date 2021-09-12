const request = require('supertest');
const app = require('../index');
describe('GET /', () => {
  it("responded with test 'Hello World'", (done) => {
    request(app).get('/').expect('Hellow world', done);
  });
});

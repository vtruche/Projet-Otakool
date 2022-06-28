const app = require('../app');
const request = require('supertest');

describe('route /', () => {
    it('return Otakool API', async () => {
        const res = request(app).get('/');
        expect((await res).statusCode).toEqual(200);
    });
});
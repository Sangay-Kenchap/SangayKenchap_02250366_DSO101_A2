const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
    it('should return status 200', async () => {
        const res = await request(app).get('/');

        expect(res.statusCode).toBe(200);
    });
});
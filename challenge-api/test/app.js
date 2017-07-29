import supertest from 'supertest';
import chai from 'chai';
import app from '../src/app/app';

const request = supertest(app);
const expect = chai.expect;

describe('GET test', () => {
    it('should works', done => {

        request
            .get('/')
            .end((err, res) => {
                expect(res.body).to.be.eql({ works: true });
                done(err);
            });
    });
});
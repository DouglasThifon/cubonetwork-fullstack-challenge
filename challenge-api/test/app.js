import supertest from 'supertest';
import chai from 'chai';
import app from '../src/app/app';
import Employee from '../src/app/model/employee';

const request = supertest(app);
const expect = chai.expect;

describe('Routes: /employees', () => {
  beforeEach((done) => {
    Employee
      .create({
        name: 'João',
        lastname: 'Silva',
        participation: 50.5,
      })
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  afterEach((done) => {
    Employee
      .remove({})
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  describe('GET /employees', () => {
    it('should return a list with one employee', (done) => {
      request
        .get('/employees')
        .end((err, res) => {
          expect(res.body).to.be.eql([{
            name: 'João',
            lastname: 'Silva',
            participation: 50.5,
          }]);
          done(err);
        });
    });
  });
});

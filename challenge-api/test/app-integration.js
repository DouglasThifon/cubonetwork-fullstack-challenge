import supertest from 'supertest';
import chai from 'chai';
import app from '../src/app/app';
import Employee from '../src/app/model/employee';

const request = supertest(app);
const expect = chai.expect;

describe('Routes: /employees', () => {
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
    before((done) => {
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

  describe('POST /employees', () => {
    it('should save a employee', (done) => {
      request
        .post('/employees')
        .send({ name: 'Jefferson', lastname: 'Martins', participation: 15.3 })
        .end((err, res) => {
          if (err) {
            done(err);
          }
          expect(res.status).to.be.eq(201);
          Employee
            .find({ name: 'Jefferson' })
            .then((employee) => {
              expect(employee).to.have.lengthOf(1);
              expect(employee[0].name).to.be.eq('Jefferson');
              expect(employee[0].lastname).to.be.eq('Martins');
              expect(employee[0].participation).to.be.eq(15.3);
              done();
            })
            .catch((dberr) => {
              done(dberr);
            });
        });
    });
  });

  describe('POST /employees', () => {
    it('should validate before save a employee', (done) => {
      request
        .post('/employees')
        .send()
        .end((err, res) => {
          if (err) {
            done(err);
          }
          expect(res.status).to.be.eq(400);
          // expect(res.body.errors).to.have.lengthOf(3);
          expect(res.body.errors).to.contains('employee.name is required');
          expect(res.body.errors).to.contains('employee.lastname is required');
          expect(res.body.errors).to.contains('employee.participation is required');
          Employee
            .find({})
            .then((employee) => {
              expect(employee).to.be.empty;
              done();
            })
            .catch((dberr) => {
              done(dberr);
            });
        });
    });
  });
});

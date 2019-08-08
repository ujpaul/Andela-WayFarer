import chai from 'chai';
import { describe, it } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../../main_page';

chai.use(chaiHttp);
chai.should();

describe(' when a user is signing up', () => {
    it('use should not be registered if there is a missing field', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          email: 'paulgmail.com',
          first_name: 'uwimana',
          last_name: 'paul',
          password: 'paul12345',
          is_admin: true,
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.should.be.an('object');
          res.should.have.property('status').eql(400);
          res.should.have.property('error');
          done();
        });
    });


it('should not be registered if the email has already been used', (done) => {
  chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        email: 'paul@gmail.com',
        first_name: 'uwimana',
        last_name: 'paul',
        password: 'paul12345',
        is_admin: true,
      }).end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.should.have.property('status').eql(400);
        res.should.have.property('error');
        done();
      });
  });
});

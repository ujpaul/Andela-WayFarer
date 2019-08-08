import chai from 'chai';
import { describe, it } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../../main_page';

chai.use(chaiHttp);
chai.should();

describe("user trying to log in", () => {
    it("should be able to login", (done) => {

        chai.request(app)
            .post('/api/v1/auth/signin')
            .send({
                "email": "paul@gmail.com",
                "password": "paul12345"
            })
            .end((err, res) => {

                res.should.have.status(200);
                res.should.be.an('object');
                res.should.have.property('status').eql(200);
                res.body.should.have.status(200);
                done();

            });

    });

    it("should not be able to login if the email is incorrect",(done) => {
        chai.request(app)
        .post('/api/v1/auth/signin')
        .send({
            "email": "paul95@gmail.com",
            "password": "paul12345"
        })
        .end((err, res) => {
            res.should.have.status(404);
            res.should.be.an('object');
            res.should.have.property('status').eql(404);
            res.body.should.have.property('error');
            res.body.should.have.status(404);
            done();
        });
    });

    it("should not be able to login if the password is incorrect",(done) => {
        chai.request(app)
        .post('/api/v1/auth/signin')
        .send({
            "email": "paul@gmail.com",
            "password": "paul60123"
        })
        .end((err, res) => {
            res.should.have.status(404);
            res.should.be.an('object');
            res.should.have.property('status').eql(404);
            res.body.should.have.property('error');
            res.body.should.have.status(404);
            done();
        });
    });

    it("should not be able to login if the email or the password is incorrect ",(done) => {
        chai.request(app)
        .post('/api/v1/auth/signin')
        .send({
            "email": "paul@gmail.com",
            "password": "paulpswd"
        })
        .end((err, res) => {
            res.should.have.status(404);
            res.should.be.an('object');
            res.should.have.property('status').eql(404);
            res.body.should.have.property('error');
            res.body.should.have.status(404);
            done();
        });
    });

});
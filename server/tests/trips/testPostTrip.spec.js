import chai from 'chai';
import { describe, it } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../../main_page';

import jwt from 'jsonwebtoken';

chai.use(chaiHttp);
chai.should();

const payload = {
    first_name: "uwimanamuneza",
    last_name: "paul",
    email: "paul@gmail.com",
}

const token = jwt.sign(payload, 'jwtPrivateKey', { expiresIn: '1d' });
describe("user post a trip ", () => {

    it("should not be able to post if no token provided", (done) => {
        chai.request(app)
            .post('/api/v1/trips')
            .send({
                sitting_capacity: 25,
                origin: "kigali",
                destination: "Gisenyi",
                trip_date: "10/9/2019",
                fare: 40000,
                status: "active"
            })
            .end((err, res) => {

                res.should.have.status(403);
                done();
            });
    });

    it("should  be able to post if token is given ", (done) => {
        chai.request(app)
            .post('/api/v1/trips')
            .set('authorization', `Bearer ${token}`)
            .send({
                sitting_capacity: 30,
                origin: "karongi",
                destination: "muhanga",
                trip_date: "10/9/2019",
                fare: 40000,
                status: "active",
            })
            .end((err, res) => {
                res.should.have.status(201);
                res.should.be.an('object');
                res.should.have.property('status').eql(201);
                res.body.should.have.property('data');
                done();

            });
    });

});

describe("user view a trip ", () => {

    it("should not be able to view trip if no token provided", (done) => {
        chai.request(app)
            .get('/api/v1/trips')

            .end((err, res) => {

                res.should.have.status(403);
                done();
            });
    });


    it("should  be able to view trip if token is given ",(done) => {
        chai.request(app)
        .get('/api/v1/trips')
        .set('authorization',`Bearer ${token}`)

        .end((err, res) => {
            res.should.have.status(200);
            res.should.be.an('object');
            res.should.have.property('status').eql(200);
            res.body.should.have.property('data');
            done();
        });
        });

});

describe("user view a specific trip ", () => {

    it("should not be able to view specific trip if no token provided", (done) => {
        chai.request(app)
            .get('/api/v1/trips/1')

            .end((err, res) => {

                res.should.have.status(403);
                done();
            });
    });

    it("should  be able to post if token is given ", (done) => {
        chai.request(app)
            .get('/api/v1/trips/1')
            .set('authorization', `Bearer ${token}`)
        
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.an('object');
                res.should.have.property('status').eql(200);
                res.body.should.have.property('data');
                done();

            });
    });

    it("should not be able to update trip if no token provided", (done) => {
        chai.request(app)
            .put('/api/v1/trips/1')
            .send({
                
                status: "cancelled"
            })
            .end((err, res) => {

                res.should.have.status(403);
                done();
            });
    });

    it("should  be able to update trip  token provided", (done) => {
        chai.request(app)
            .put('/api/v1/trips/1')
            .set('authorization', `Bearer ${token}`)
            .send({
                
                status: "cancelled"
            })
            .end((err, res) => {

                res.should.have.status(200);
                done();
            });
    });
 
    it("should  be able to update trip  token provided", (done) => {
        chai.request(app)
            .put('/api/v1/trips/1')
            .set('authorization', `Bearer ${token}`)
            .send({
                
                status: "cancelled"
            })
            .end((err, res) => {

                res.should.have.status(200);
                done();
            });

            
    });

});


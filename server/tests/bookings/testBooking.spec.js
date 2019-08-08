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

describe("user post a book ", () => {

    it("should not be able to post if no token provided", (done) => {
        chai.request(app)
            .post('/api/v1/bookings')
            .send({
                "bus_licence_number": "RAD0200X",
                "trip_date": "10/8/2019",
                "first_name": "uwimana",
                "last_name": "paul",
                "user_email": "paul@gmail.com"
            })
            .end((err, res) => {

                res.should.have.status(403);
                done();
            });
    });

    it("should  be able to post if token provided", (done) => {
        chai.request(app)
            .post('/api/v1/bookings')
            .set('authorization', `Bearer ${token}`)
            .send({
                "bus_licence_number": "rad110b",
                "trip_date": "10/9/2019",
                "first_name": "muneza",
                "last_name": "patrick",
                "user_email": "patrick@gmail.com"
            })
            .end((err, res) => {

                res.should.have.status(201);
                done();
            });
    });

});
describe("user get their book ", () => {

    it("should not be able to view his booking if no token provided", (done) => {
        chai.request(app)
            .get('/api/v1/bookings/paul@gmail.com')
            
            .end((err, res) => {

                res.should.have.status(403);
                done();
            });
    });

    it("should be able to view his booking if token provided", (done) => {
        chai.request(app)
            .get('/api/v1/bookings/paul@gmail.com')
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {

                res.should.have.status(200);
                done();
            });
    });


});

describe("view bookings ", () => {

    it("should not be able to view  booking if no token provided", (done) => {
        chai.request(app)
            .get('/api/v1/bookings')
            
            .end((err, res) => {

                res.should.have.status(403);
                done();
            });
    });

    it("should be able to view bookings if token provided", (done) => {
        chai.request(app)
            .get('/api/v1/bookings')
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {

                res.should.have.status(200);
                done();
            });
    });

    
});
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app.js');

chai.should();

chai.use(chaiHttp);

describe('Reports', () => {
    describe('GET /reports/week/1', () => {
        it('200 HAPPY PATH', (done) => {
            chai.request(server)
                .get("/reports/week/1")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    // res.body.data.should.be.an("array");
                    // res.body.data.length.should.be.above(0);

                    done();
                });
        });
    });

    describe('POST /reports', () => {
        it('should get 401 as we do not provide valid token', (done) => {
            let payload={
                "text":"updated text",
                "week":1
            }
            chai.request(server)
                .post("/reports")
                .send(payload)
                .end((err, res) => {
                    res.should.have.status(401);
                    res.body.should.be.an("object");
                    done();
                });
        });
    });
});

describe('Login', () => {
    describe('GET /login', () => {
        it('200 HAPPY PATH', (done) => {
            chai.request(server)
                .get("/login")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");

                    done();
                });
        });
    });

    describe('POST /login', () => {
        it('Should get 401 as user and pass is wrong', (done) => {
            let user = {
                email: "test@example.com",
                password: "123test",
            };

            chai.request(server)
                .post("/login")
                .send(user)
                .end((err, res) => {
                    res.should.have.status(401);
                    res.body.should.be.an("object");
                    res.body.errors.status.should.be.equal(401);
                    done();
                });
        });
    });
});



describe('Register', () => {
    describe('GET /register', () => {
        it('200 HAPPY PATH', (done) => {
            chai.request(server)
                .get("/register")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");

                    done();
                });
        });
    });
});



const app = require('./server') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)


it('Call the endpoint /home', (done) => {
    request
      .get('/youtube')
      .expect(200)
      .end((err, res) => {
        expect(res.text).toBe('Hello, youtube indonesia!')
        if (err) return done(err);
        done();
      });
  });

it('Call the endpoint /ping', (done) => {
    request
      .get('/ping')
      .expect(200)
      .end((err, res) => {
        expect(res.text).toBe('Pong!')
        if (err) return done(err);
        done();
      });
  });

it('Call the endpoint /facebook', (done) => {
    request
      .get('/facebook')
      .expect(200)
      .end((err, res) => {
        expect(res.text).toBe('Hello, facebook indonesia!')
        if (err) return done(err);
        done();
      });
  });

  it('Call the endpoint /', (done) => {
    request
      .get('/')
      .expect(200)
      .end((err, res) => {
        expect(res.text).toBe('This App is running properly!')
        if (err) return done(err);
        done();
      });
  });

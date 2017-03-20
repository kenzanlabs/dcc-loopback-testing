'use strict';

const chaiHttp = require('chai-http');
const chai = require('chai');
chai.use(chaiHttp);
const expect = chai.expect;
const app = require('../../../server/server');
const request = chai.request(app);

describe('messages/', () => {
  describe('greet/', () => {
    describe('GET request', () => {
      it('returns the message', done => {
        request.get('/api/messages/greet')
          .query({msg: 'woof'})
          .end((err, data) => {
            if (err) {
              return done(err);
            }

            expect(data.status).to.equal(200);
            expect(data.body).to.have.key('greeting');
            expect(data.body.greeting).to.equal('Sender says woof to receiver');

            done();
          });
      });
    });
  });
});

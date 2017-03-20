'use strict';

const expect = require('chai').expect;
const app = require('../../../server/server');

describe('Message model', () => {
  describe('greet()', () => {
    it('should fire a callback', () => {
      const blankMsgCallback = (error, message) => {
        expect(error).to.be.null;
        expect(message).to.equal('Sender says hello to receiver');
      };

      const msgCallback = (error, message) => {
        expect(error).to.be.null;
        expect(message).to.equal('Sender says meow to receiver');
      };

      const noMsgCallback = () => {};

      app.models.Message.greet('', blankMsgCallback);
      app.models.Message.greet('meow', msgCallback);

      expect(() => {
        app.models.Message.greet(noMsgCallback);
      }).to.throw(TypeError);
    });
  });
});

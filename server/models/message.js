'use strict';

module.exports = function(Message) {
  Message.greet = function(msg, cb) {
    msg = msg || 'hello';
    cb(null, 'Sender says ' + msg + ' to receiver');
  };
};

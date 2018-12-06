var models = require('../models');

// Here, we're talking to our server & client

module.exports = {
  messages: {
    // Gets request from client and response from server
    get: function (req, res) {
      
    }, // a function which handles a get request for all messages
    // Gets request from client and response from server
    post: function (req, res) {

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};


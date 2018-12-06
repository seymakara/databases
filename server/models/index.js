var db = require('../db');
var con = require('../db/index.js').con

//This file talks to the database

module.exports = {
  messages: {
    // Gets all requests from server
    get: function () {},
    // Posts messages to database
    post: function () {}
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  },

  rooms: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};


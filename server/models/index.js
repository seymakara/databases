var db = require('../db');
var con = require('../db/index.js').con

//This file talks to the database

module.exports = {
  messages: {
    // Gets all requests from server
    get: function (callback) {
      // console.log(con)
      con.connect(err => {
        if (err) throw err;
        con.query('SELECT * FROM messages', (err, result) => {
          if (err) throw err;
          callback(null, result);
        });
      })
    },
    // Posts messages to database
    post: function (msgObj, callback) {
      con.connect(err => {
        if (err) throw err;
        con.query(`INSERT REPLACE INTO messages (message) VALUES (${msgObj});`, (err, result) => {
          if (err) throw err;
          callback(null, result);
        });
      })
    }
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


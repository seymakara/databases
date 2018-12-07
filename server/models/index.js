var db = require('../db');
var con = require('../db/index.js').con

//This file talks to the database

module.exports = {
  messages: {
    get: function (callback) {
        con.query('SELECT * FROM messages', (err, result) => {
          if (err) throw err;
          console.log()
          callback(null, result);
        });
    },
    post: function (msgObj, callback) {
      var username = msgObj.username;
      var roomname = msgObj.roomname;
      var text = msgObj.text;
      con.query(`INSERT INTO messages (text, username, roomname) VALUES ('${text}', '${username}', '${roomname}')`, (err, result) => {
        if (err) throw err;
        con.query('SELECT * FROM messages', (err, allMsg) => {
          console.log("ALL MESSAGES", allMsg)
          callback(null, allMsg);
        })
      });
    }
  },

  users: {
    // Ditto as above.
    get: callback => {
      con.query('SELECT * FROM users', (err, result) => {
        if (err) {
          throw err;
        }
        callback(null, result);
      });
    },
    post: (msgObj, callback) => {
      var username = msgObj.username;
      con.query(`INSERT INTO users (username) VALUES ('${username}')`, (err, result) => {
        if (err) throw err;
        con.query('SELECT * FROM users', (err, allMsg) => {
          if (err) throw err;
          callback(null, allMsg);
        });
      });
    }
  },

};


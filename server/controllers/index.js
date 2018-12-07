var models = require('../models');


module.exports = {
  messages: {
    // GET request
    get: function (req, res) {
      models.messages.get((err, dataset) => {
        // console.log('within controller.messages.get', dataset);
        if (dataset.length > 0) {
          res.send({ results: dataset });
        } else {
          res.send({results: [{objectId: '1234', username:'system' , text: 'no messages', roomname: 'lobby'}]});
        }
      });
    }, 
    //POST request
    post: function (req, res) {
      console.log("REQ BODY", req.body, typeof req.body)
      models.messages.post(req.body, (err, result) => {
        if (err) {
          throw err;
        } 
        console.log("RESULTS at controller", result)
        res.send({results: result});
      });
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};


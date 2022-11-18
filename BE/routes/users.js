var express = require('express');
var router = express.Router();

var db = require('./../models/database');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  let sql = `SELECT * FROM parkings`;
    db.query(sql, function(err, data) {
        res.json(data);
    });
});

module.exports = router;

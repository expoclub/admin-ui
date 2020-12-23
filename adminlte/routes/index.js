var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('iframe');
});

router.get('/index', function(req, res, next) {
 
  res.render('index');
});
router.get('/index2', function(req, res, next) {
  
   res.render('index2');
 });
 router.get('/index3', function(req, res, next) {
 
   res.render('index3');
 });
module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Foo' });
});

router.post('/', function(req, res, next) {
  res.json({ title: 'Foo' });
});

module.exports = router;

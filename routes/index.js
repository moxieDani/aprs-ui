var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Automatic Packaging Release System',
  sess: req.session,
  categori: 'index', author: '' });
});

module.exports = router;

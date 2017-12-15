var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.render('main', { title: 'Automatic Packaging Release System',
  sess: req.session,
  categori: 'main', author: '' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/logout', function (req, res) {
    res.render('logout');
});
module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.all('/*', function(req, res, next) {
    res.sendFile('/public/index.html', { root: __dirname });
    // res.sendFile('index.html');
});

module.exports = router;
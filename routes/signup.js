;
(function() {
    'use strict';
    var express = require('express');
    var router = express.Router();
    var db = require('../database/database');
    var services = require('../services');

    // GET Signup page
    var getSignupView = function(req, res) {
        var postuser = req.body;

        if (services.isEmpty(postuser)) {
            res.sendStatus(500);
        } else {
            db.query('INSERT INTO userlist SET ?', postuser, function(err, result) {
                if (err) throw err;
                console.log("1 record inserted");
            });
            res.sendStatus(200);
        }

        // req.end();
    };

    router.post('/v1/signup', getSignupView);

    module.exports = router;
})();
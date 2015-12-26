var express = require('express');
var router = express.Router();

/* GET pulseRouter listing. */
router.post('/', function (req, res, next) {

    //Access the file in req.file
    console.log(req.file);


    res.json({
        "heartrate": 75
    });
});

module.exports = router;
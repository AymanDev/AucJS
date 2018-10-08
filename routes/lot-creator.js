let express = require('express');
const MongoClient = require("mongodb");
let router = express.Router();

const url = 'mongodb://localhost:27017';
/* GET home page. */
router.get('/', function (req, res, next) {

    MongoClient.connect(url, function (err, client) {
        console.log("Connected successfully to database");
        res.render('lot-creator', {
            title: 'Auc'
        });
    });
});

module.exports = router;

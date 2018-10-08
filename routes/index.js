let express = require('express');
const MongoClient = require("mongodb");
let router = express.Router();

const url = 'mongodb://localhost:27017';
/* GET home page. */
router.get('/', function (req, res, next) {

    MongoClient.connect(url, function (err, client) {
        console.log("Connected successfully to database");
        let db = client.db("auction");
        let collection = db.collection("lots");

        collection.find({}).toArray(function (err, docs) {
            res.render('index', {
                title: 'Auc',
                lots: docs
            });
        });
    });


});

module.exports = router;

let express = require('express');
const MongoClient = require("mongodb");
let router = express.Router();

let lotInfo;
const url = 'mongodb://localhost:27017';

/* GET home page. */
router.get('/', function (req, res, next) {
    let lotName = req.query.lotName;

    MongoClient.connect(url, function (err, client) {
        console.log("Connected successfully to database");
        let db = client.db("auction");
        let collection = db.collection("lots");
        let query = {name: lotName};
        collection.find(query).toArray(function (err, docs) {
            res.render('lot', {
                title: 'Lot',
                lotName: lotName,
                lotParams: docs[0]
            });
        });
    });



});

module.exports = router;

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
        let msg = "Lot created!";
        let obj = {
            name: req.query.lotName,
            description: req.query.lotDescription,
            startPrice: req.query.lotPrice,
            currentPrice: req.query.lotPrice,
            image: req.query.lotImage,
            canBuy: false
        };

        collection.insertOne(obj, function (err) {
            if (err) {
                msg = "Can't place lot!";
                throw err;
            }
            res.render('lot-creator-submit', {
                title: 'Auc',
                infoMessage: msg
            });
        });
    });
});

module.exports = router;

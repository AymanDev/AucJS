let express = require('express');
const MongoClient = require("mongodb");
let router = express.Router();

const url = 'mongodb://localhost:27017';
/* GET home page. */
router.get('/', function (req, res, next) {
    let lotName = req.query.lotName;
    let lotPrice = req.query.lotPrice;

    MongoClient.connect(url, function (err, client) {
        console.log("Connected successfully to database");
        let db = client.db("auction");
        let collection = db.collection("lots");
        let query = {name: lotName};

        collection.find(query).toArray(function (err, docs) {
            if (err) throw err;

            let document = docs[0];
            let codeMessage = "Unknown error";

            if (lotPrice > document.currentPrice) {
                let newValue = {$set: {currentPrice: lotPrice}};
                collection.updateOne(query, newValue, function (err, res) {
                });
                codeMessage = "Lot placed!";
            } else {
                codeMessage = "Your lot lower than current price!";
            }
            res.render('lot-submit', {
                title: 'Auc',
                msg: codeMessage
            });
        });
    });
});

module.exports = router;

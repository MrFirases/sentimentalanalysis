/**
 * Created by Narimen on 2/22/2017.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

var analyze = require('Sentimental').analyze,
    positivity = require('Sentimental').positivity,
    negativity = require('Sentimental').negativity;

var analyzeV=null;
var positivityV=null;
var negativityV=null;


router.get('/analyse', function(req, res, next) {
    res.render('result',{analyze : analyzeV,
        positivity : positivityV,
        negativity : negativityV})
});


router.post('/analyse/testing',function (req,res) {
    //Getting results in console
    console.log("Analyse: ",analyze(req.body.query));
    console.log("Positivity: ",positivity(req.body.query));
    console.log("Negativity: ",negativity(req.body.query));
    console.log(req.body.query);

    //Analyse data sent on body
    analyzeV = analyze(req.body.query);
    positivityV = positivity(req.body.query);
    negativityV = negativity(req.body.query);

    res.redirect('/sentimental/analyse');


});

module.exports = router;

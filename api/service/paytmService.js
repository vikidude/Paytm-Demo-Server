const checksum = require('../controller/paytm/checksum');
const config = require('../config/config');
const mongoose = require('mongoose');

async function getRequest(req, res) {
    res.render("paytm/index", { 'config': config })
}

async function request(req, res) {
    console.log('req.body', req.body);

    var paramList = req.body;
    var paramArray = new Array();

    for (name in paramList) {
        if (name == 'PAYTM_MERCHANT_KEY') {
            config.PAYTM_MERCHANT_KEY = paramList[name];
        } else {
            paramArray[name] = paramList[name];
        }
    }
    paramArray["CALLBACK_URL"] = "http://192.168.43.101:3000/api/paytm/response";

    checksum.genchecksum(paramArray, config.PAYTM_MERCHANT_KEY, function (err, result) {
        if (err) throw err;
        console.log('Generate Checksum: ', result);
        res.render('paytm/request', { result });
    });
}

async function response(req, res) {
    let result;
    if (req.body.RESPCODE === "01") {
        result = req.body;
    } else {
        result = req.body;
    }
    return result;
}

module.exports.getRequest = getRequest;
module.exports.request = request;
module.exports.response = response;
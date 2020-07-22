const paytmService = require('../service/paytmService');

exports.getPaytmRequest = (req,res,next) =>{
    paytmService.getRequest(req,res).then(doc=>{
    }).catch(next);
}

exports.PaytmRequest = (req,res,next) =>{
    paytmService.request(req,res).then(doc =>{
    }).catch(next);
}

exports.PaytmResponse =(req,res,next) =>{
    console.log('Inner Respone Controller',req.body);
    
    if (req.body.RESPCODE === "01") {
        res.render("paytm/response", {
            status: true,
            result: req.body
        });
    } else {
        res.render("paytm/response", {
            status: false,
            result: req.body
        });
    }
}
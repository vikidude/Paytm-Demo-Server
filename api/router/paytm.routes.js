const router  = require('express').Router();
const paytmController = require('../controller/paytm.controller');

router.get('/request',paytmController.getPaytmRequest);
router.post('/request',paytmController.PaytmRequest);
router.post('/response',paytmController.PaytmResponse);

module.exports = router;

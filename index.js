const express = require('express');
const bodyparser = require('body-parser');
const engine = require('consolidate');
const cors = require('cors');

const app = express();

app.engine('ejs',engine.ejs);
app.set('views','./api/views');
app.set('view engine','ejs');

app.use(cors());

app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}),bodyparser.json());
app.get('/', (req,res)=>{
    res.send({
        message:'Test Working Paytm'
    })
})
const paytmRequest = require('./api/router/paytm.routes');
app.use('/api/paytm',paytmRequest)
module.exports = app;

// const express = require('express');
// const bodyparser = require('body-parser');
// const path = require('path');
// const cors = require('cors');
// const app = express();
// app.use(cors());
// app.use(bodyparser.urlencoded({extended:true}));
// const engines = require('consolidate');

// // PayTM
// app.engine('ejs', engines.ejs);
// app.set("views","./api/views");
// app.set("view engine","ejs");

// app.use('/api/public', express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => {
//     res.json({"message": "Welcome to Paytm Test Api Server"});
// });
// //app.use(express.static(path.join(__dirname,'dist/f2b')))
// app.use(bodyparser.json({ limit: '5mb' }));

// // const paytmRequest = require('./api/router/paytm.routes');
// // //PayTm
// // app.use("/api/paytm",paytmRequest);
// // app.get('*', (req, res) => { 
// //     res.status(500).json({status:404})
// //   //  res.sendFile(path.join(__dirname, 'dist/trackingsystemclient/index.html'))
// // });

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Orgin", "*");
//     res.header("Access-Control-Allow-Header", "Orgin,X-Request-With, Content-Type, Accept");
//     res.header("Cache-Control", "no-cache, no-store, must-revalidate");
//     res.header("Pragma", "no-cache");
//     res.header("Expires", 0);
//     next();
// });

// app.use((req, res, next) => {
//     console.log('URL Called');
//     const error = new Error('Not Found');
//     error.status = 404;
//     next(error);
// });

// app.get("/createCheckSum",(request,res) =>{
//     paramarray = {}
//     paramarray['MID']='iOzsHq37281630658997';
//     paramarray['ORDER_ID']=request.query.OrderID;
//     paramarray['CUST_ID']=request.query.CustomerID;
//     paramarray['INDUSTRY_TYPE_ID']='Retail';
//     paramarray['CHANNEL_ID']='WAP';
//     paramarray['TXN_AMOUNT']=request.query.TaxationAmount;
//     paramarray['WEBSITE']='WEBSTAGING';
//     paramarray['CALLBACK_URL']='http://192.168.43.101:3000/testpaytm';
//     paramarray['EMAIL']='waranbhuvanesh8@gmail.com';
//     paramarray['MOBILE_NO']='9597299278';
//     merchantkey='092prGrepGk1WivZ'
//     paytmModule.getchecksum(paramsarray,merchantKey, (err, checksum) => {
//         paramarray['CHECKSUMHASH'] = checksum
//         url = 'https://securegw.paytm.in/order/process'
//         res.writeHead(200, { 'Content_type': 'text/html' });
//         res.write('<html>');
//         res.write('<head>');
//         res.write('<title>Merchant Checkout Page</title>');
//         res.write('</head>');
//         res.write('<body>');
//         res.write('<center><h1>Please do not refresh this page...</h1></center>');
//         res.write('<form method="post" action="' + url + ' "name="paytm_form">');;
//         for(var x in paramarray){
//             res.write('<input type="hidden" name="CHECKSUMHASH" value="' + paramarray[x] +'>"');

//         }
//         res.write('<input type="hidden" name="CHECKSUMHASH" value="' + checksum +'>"');
//         res.write('</form>');
//         res.write('<script type="text/javascript">');
//         res.write('document.paytm_form.submit();');
//         res.write('</script>');
//         res.write('</body>');
//         res.write('</html>');
//     })
// })

// app.post("/testpaytm", (request, response)=>{
//     console.log('Callback received')
//     renderData=`
//         <html>
//             <head>
//                 <title>
//                     ${request.body.STATUS === 'TXN_SUCCESS'}
//                 </title>
//             </head>
//             <body>
//                 ${request.body.STATUS === 'TXN_SUCCESS'? "Transaction successful" : "Transaction Failed" }
//             </body>
//         </html>
//     `
//     response.send(renderData)
// })
// module.exports = app;
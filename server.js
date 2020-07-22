// const http = require('http');
// const app = require('./index.js');
// const port = process.env.PORT || 3000;

// const server = http.createServer(app);
// server.listen(port);
// console.log(`server Running at ${port}`);

const app = require('./index');

app.listen(3000, ()=>{
    console.log('From Server js file')
})
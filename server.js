// let http = require('http');
// const routes = require(`./router`);
require('dotenv').config();
//
// http.createServer(routes).listen(process.env.PORT);
// console.log("server running on port 3000");


const {app} = require('./Routers/mainRouter');
app.listen(process.env.PORT);
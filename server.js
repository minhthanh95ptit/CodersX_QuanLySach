const express = require("express");
const app = express();
var userRoute = require('./routes/user.route.js')
var bookRoute = require('./routes/book.route.js')
var transactionRoute = require('./routes/transaction.route.js')
var authRoute = require('./routes/auth.route');

var authMiddleware = require('./middlewares/auth.middlewares');
var bodyParser = require("body-parser");
var cookieParse = require("cookie-parser");

var shortid = require('shortid');

app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParse());
app.use(express.static('public'));
var db = require('./db');
app.get('/',function(req, res, next){
 res.send("HELLO CODERSX");
});


app.use('/users', userRoute);
app.use('/books', bookRoute);
app.use('/transactions', transactionRoute);

app.use('/auth', authRoute);
// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

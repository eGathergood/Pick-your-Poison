const MongoClient = require('mongodb').MongoClient; 
const url = "mongodb://localhost:27017/users";
const express = require('express');
const app = express();
const session = require('express-session'); 
const bodyParser = require('body-parser'); 

app.use(session({ secret: 'example' }));

app.use(bodyParser.urlencoded({
  extended: true
}))
// set the view engine to ejs
app.set('view engine', 'ejs');

var db;


app.get('/', function(req, res){
 res.render('/index.html');
});
app.listen(8080);
console.log('listen on 8080');



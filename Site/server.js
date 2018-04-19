const MongoClient = require('mongodb').MongoClient; 
const url = "mongodb://localhost:27017/users";
const express = require('express');
const app = express();
const session = require('express-session'); 
const bodyParser = require('body-parser'); 

app.get('/', function(req, res){
 res.sendFile('/home/codio/workspace/Pick-your-Poison/Site/index.html');
});
app.listen(8080);
console.log('listen on 8080');

app.post('/dologin', function(req, res) {
  console.log(JSON.stringify(req.body))
  var uname = req.body.username;
  var pword = req.body.password;

  db.collection('users').findOne({"login.username":uname}, function(err, result) {
    if (err) throw err;//if there is an error, throw the error
    //if there is no result, redirect the user back to the login system as that username must not exist
    if(!result){res.redirect('/login');return}
    //if there is a result then check the password, if the password is correct set session loggedin to true and send the user to the index
    if(result.login.password == pword){ req.session.loggedin = true; res.redirect('/') }
    //otherwise send them back to login
    else{res.redirect('/login')}
  });
});


app.post('/login', function(req, res) {
  //check we are logged in
  if(!req.session.loggedin){res.redirect('/login');return;}

  //we create the data string from the form components that have been passed in

var datatostore = 
"name":req.body.username,
 "email":req.body.email,
  "password":req.body.password}
 


//once created we just run the data string against the database and all our new data will be saved/
  db.collection('users').save(datatostore, function(err, result) {
    if (err) throw err;
    console.log('saved to database')
    //when complete redirect to the index
    res.redirect('/')
  })
});

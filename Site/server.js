var express = require('express');
var app = express();
app.get('/', function(req, res){
 res.sendFile('/home/codio/workspace/Pick-your-Poison/Site/index.html');
});
app.listen(8080);



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

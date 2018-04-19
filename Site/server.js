var express = require('express');
var app = express();
app.get('/', function(req, res){
 res.sendFile('/home/codio/workspace/Pick-your-Poison/Site/index.html');
});
app.listen(8080);

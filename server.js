var express = require('express');
var jade = require('jade');

try{
	require('dotenv').config();
}catch(e){
	console.log(e);
}

var config = {
	API_KEY: process.env.API_KEY,
	AUTH_DOMAIN: process.env.AUTH_DOMAIN,
	DATABASE_URL: process.env.DATABASE_URL,
	MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
	STORAGE_BUCKET: process.env.STORAGE_BUCKET
}

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
	if (req.headers['x-forwarded-proto'] === 'https') {
		res.redirect('http://' + req.hostname + req.url);
	} else {
		next();
	}
});

app.use(express.static('public'));

app.get('/site.js', function(req, res){
    res.send("var ENV='"+JSON.stringify(config)+"'");
});

//app.use('/vendors', express.static(__dirname + '/public/vendors'));

app.listen(PORT, function() {
  console.log('Express server is up on port ' + PORT);
});
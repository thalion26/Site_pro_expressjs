var express     = require('express');
var path        = require('path');
var bodyParser  = require('body-parser');
var nodemailer  = require('nodemailer');

var app         = express();
var transporter = nodemailer.createTransport();
var port        = process.env.PORT || 3000;


app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(request,response){
	response.render('index');
});

app.post('/', function(request,response){
	transporter.sendMail({
	    from: request.body.email,
	    to: 'remi.bertrand3108@gmail.com',
	    subject: 'Contact depuis site pro',
	    text: request.body.message,
	    html: request.body.message
	});
	console.log('mail envoyé');
	response.redirect('/');
});

app.listen(port);
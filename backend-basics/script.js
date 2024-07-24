const { name } = require('ejs');
const express = require ('express');
const app = express();

//ejs is template engine used by node.js. it helps to create an html template with minimal code
//ejs gives dynamic approach to html
app.set("view engine", "ejs");

//configure the static files
app.use(express.static('./public'))

//req - contains the user data who sends the request in this case it's me
//res - contains the user data who sends the respond in this case the server

//middleware - this the code that is executed before any code on any route 
//app.use requires a fucntion as an arg
//next() - when the control goes to middleware then it requires next() to move to further route
// app.use(function(req, res, next) {
//     console.log("middleware working"); 
//     //it will print output whenever one switches the route 
//     next();
// }) --> this is middleware

app.get('/', function (req, res) {
    res.render('index', {name: "AT PraRoz"})
})

app.get('/contact-us', function(req, res){
    res.render('contact', {phone: "+911122334455"})
})

app.get('/profile', function (req, res) {
    res.send('this is the profile')
})

//as the user is the info from the user side do req.params.user
//:user is the params (parameter)
app.get('/profile/:user' , function(req, res){
    res.send(`welcome to the profile page ${req.params.user}`)
})

app.listen(3000);

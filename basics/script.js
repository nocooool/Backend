const express = require ('express');
const app = express();

//req - contains the user data who sends the request in this case it's me
//res - contains the user data who sends the respond in this case the server

//middleware - this the code that is executed before any code on any route 
//app.use requires a fucntion as an arg
//next() - when the control goes to middleware then it requires next() to move to further route
app.use(function(req, res, next) {
    console.log("middleware working"); 
    //it will print output whenever one switches the route 
    next();
})

app.get('/', function (req, res) {
    res.send('hello world')
})

app.get('/profile', function (req, res) {
    res.send('this is the profile')
})

app.listen(3000);

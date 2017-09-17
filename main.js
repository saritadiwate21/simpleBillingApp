var express = require('express'); //including express   
var app = new express(); // Creating instance   
var path = require('path');
var port = 3000; // setting port for the application   
//Following function is starts sockets and start listen from particular port. In following code I have given call back which contains err. So when port willbe start and listen function will be fire then this function will be execute.   
app.listen(port, function(err) {  
    if (typeof(err) == "undefined") {  
        console.log('Your application is running on : ' + port + ' port');  
    }  
}); 
app.use(express.static('app'));
 app.get('/', function(req, res) {
    res.sendFile(path.join('.app/index.html'));
 });



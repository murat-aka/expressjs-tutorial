var express = require("express");
var app = express();


app.set('view engine','ejs');
//app.set('views', __dirname + '/views');

app.locals.pagetitle = "Awesome Website";


app.get("/", function(req,res){
    
   // res.send("<H1>Hello </H1>Express");
   res.render('default', {
       
       
       title: 'Home',
       classname: 'home',
       users: ['ray', 'mur', 'sam']
       
       
       
   });
    

});



app.get("/about", function(req,res){
    
      res.render('default', {
       
       
       title: 'About Us',
       classname: 'about'
       
       
       
       
   });
    

});


app.get("/who/:name?", function(req,res){
    
    var name = req.params.name;
    
    res.send(name + " was here");
    

});


app.get("/who/:name?/:title?", function(req,res){
    
    var name = req.params.name;
    var title = req.params.title;
    
    res.send("<p> name: " + name + " <br>title: " + title + "</p>");
    

});


app.get("*", function(req,res){
    
  
    
    res.send("Bad route");
    

});



var server = app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);


});
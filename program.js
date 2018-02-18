//////////////////////////////////////////
/* this program contains exercises from */
/* freecodecamps expressjs tutorials    */
//////////////////////////////////////////


         //////////////////
         ///// START  /////
         //////////////////


 /*/////////////////////////////////*/
 /* function hello world exercise 1 */
 /*/////////////////////////////////*/
 
 function hello(){
 
    var express = require('express');
    var app = express();
    app.get('/home', function(req, res) {
      res.end('Hello World!');
    })
    app.listen(Number(process.argv[2]));
 
 }
 
 //hello();
 
 
 
 /*//////////////////////////////////*/
 /* function static exercise 2       */
 /*//////////////////////////////////*/
 
 
 function sTatic(){
 
    var express = require('express'); // load express module
    var path = require("path"); // load path module
    var app = express(); // initialise express app

    app.use(express.static(process.argv[3]||path.join(__dirname, 'public'))); // static page to use

    app.listen(Number(process.argv[2])); // start server on port arg
 
 }
 
 //sTatic();
 
 
 
 
 
 /*//////////////////////////////////*/
 /* function jadeT exercise 3        */
 /*//////////////////////////////////*/
 
 
 function jadeT(){
 
    var express = require('express'); // load express module
    var app = express(); // initialise express app
    app.set('view engine', 'jade'); // use jade template engine
    
    
    app.get('/home', function(req, res) { // get request middleware from expressjs
        
        app.set('views',process.argv[3]); // use jade template provided
        res.render('index', {date: new Date().toDateString()}); // display date on index form
    });

    app.listen(Number(process.argv[2])); // start server on port arg
 
 }
 
 //jadeT();
 
 
 
 
 
 
 /*//////////////////////////////////*/
 /* function oldform exercise 4      */
 /*//////////////////////////////////*/
 
 
 function oldForm(){
 
    var express = require('express'); // load express module
    var bodyparser = require('body-parser'); // use parser module

    var app = express(); // initialise express app
    app.use(bodyparser.urlencoded({extended: false})); // set url encode

    app.post('/form', function(req, res) { // post request middleware from expressjs
        res.send(req.body.str.split('').reverse().join('')); // reverse request
    });

    app.listen(Number(process.argv[2])); // start server on port arg
 
 }
 
 oldForm();
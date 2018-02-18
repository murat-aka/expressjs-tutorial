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
 
 //oldForm();
 
 



 /*//////////////////////////////////*/
 /* function stylish exercise 5      */
 /*//////////////////////////////////*/
 
 
 function stylish(){
 
    var express = require('express'); // load express module
    var path = require("path"); // load path module
    var app = express(); // initialise express app
    
    app.use(require('stylus').middleware(process.argv[3]||path.join(__dirname, 'public'))); // use styles
    app.use(express.static(process.argv[3]||path.join(__dirname, 'public'))); // static page to use

    app.listen(Number(process.argv[2])); // start server on port arg    
 
 }
 
 //stylish();
 
 
 


 /*//////////////////////////////////*/
 /* function paramm exercise 6       */
 /*//////////////////////////////////*/
 
 
 function paramm(){
 
    var express = require('express'); // load express module
    var app = express(); // initialise express app

    app.put('/message/:NAME', function(req, res) { // put request middleware from expressjs
    
        var id = req.params.NAME; // PUT /message/526aa677a8ceb64569c9d4fb
        var hdate =  require('crypto')
                        .createHash('sha1')
                        .update(new Date().toDateString() + id)
                        .digest('hex'); // encrypt date to hash1 value
                        
        res.send(hdate); // reverse request
    });

    app.listen(Number(process.argv[2])); // start server on port arg    

 }
 
 paramm();
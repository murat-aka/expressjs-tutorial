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
                        
        res.send(hdate); 
    });

    app.listen(Number(process.argv[2])); // start server on port arg    

 }
 
 //paramm();
 
 
 

 /*//////////////////////////////////*/
 /* function inQuery exercise 7      */
 /*//////////////////////////////////*/
 
 
 function inQuery(){
 
    var express = require('express'); // load express module
    var app = express(); // initialise express app

    app.get('/search', function(req, res) { // get request middleware from expressjs
    
        var qry = req.query; //GET /search URL route, e.g. ?results=recent&include_tabs=true
        
        var ob = Object.keys(qry); // get object keys
        ob.pop(); // remove last item
        

        var jOb={}; // empty json object
        ob.forEach( function (value,i){
            var str = qry[value]; // object value
            jOb[ob[i]] = str; // add to json object
        });
        
        
        res.send(JSON.stringify(jOb)); // jsonify jObject
    });

    app.listen(Number(process.argv[2])); // start server on port arg 
 }
 
 //inQuery();
 


 /*//////////////////////////////////*/
 /* function fileJson exercise 8     */
 /*//////////////////////////////////*/
 
 
 function fJson(){
     
    var express = require('express'); // load express module
    var app = express(); // initialise express app
    
    var port = process.argv[2]; // get the port number from args
    var fPath = process.argv[3]; // read file path from args 
    var fs = require('fs'); // load file system module

    app.get('/books', function(req, res) { // get request middleware from expressjs
    
        fs.readFile(fPath, function doneReading(err, fileContents) { // readFile is asycronous so a call back function is passed.
        
        if(!err){
         
          var strString = fileContents.toString(); // convert file contents or the buffer object to string
          res.send(JSON.stringify(JSON.parse(strString))); // jsonify string;     
         
        }else{
          res.send("500");
        }
        
        });
        
    });

    app.listen(port); // start server on port arg 
 }
 
 fJson();
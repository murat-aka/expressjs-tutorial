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
 
 sTatic();

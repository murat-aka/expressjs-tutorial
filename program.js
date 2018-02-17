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
 /* function static exercise 2  */
 /*//////////////////////////////////*/
 
 
 
 function sTatic(){
 
    var express = require('express');
    var path = require("path");
    var app = express();
    app.get('/', function(req, res) {
      //res.end('Hello World!');
      app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
    })
    app.listen(Number(process.argv[2]));
    
    
 
 }
 
 sTatic();

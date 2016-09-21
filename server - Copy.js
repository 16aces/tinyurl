var express = require('express');


var app = express();

var mongodb = require('mongodb');
var mongoose = require('mongoose')

//var mongoose.Promise = require('bluebird');
//assert.equal(query.exec().constructor, require('bluebird'));
 /*var options = { promiseLibrary: require('bluebird') };
    var db = mongoose.createConnection(uri, options);

    Band = db.model('band-promises', { name: String });

    db.on('open', function() {
      assert.equal(Band.collection.findOne().constructor, require('bluebird'));
    });
*/

//var mongoose = require('mongoose')
//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

var urlSchema = mongoose.Schema({
  url: String,
    tiny:Number
   
});



var url = 'mongodb://zakr:jessica1qq@ds033056.mlab.com:33056/zakrurls'; 
// Use connect method to connect to the Server
/*  MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', url);

    // do some work here with the database.

    //Close connection
    db.close();
  }
});*/
  /*  bodyParser        = require('body-parser');
   //mongoose          = require('mongoose'),
//    meetupsController = require('./server/controllers/meetups-controller');

//mongoose.connect('mongodb://localhost:27017/timewaste')

app.use(bodyParser());
;var port = process.env.PORT || 8080;
*/
// routes will go here

// start the server
app.listen('3000',function(){
  console.log("this is working")
})
  var db=mongoose.connect(url, function (err, db) {
      //console.log("test")
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', url);}});

  var URL = db.model('urls',urlSchema)
//app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json())
 //var URL = mongoose.model('User', {url: String,  tiny: Number});
app.get('/*', function(req, res) {

  var ans="na";
  var input = req.path.substr(1);
  console.log(input)

  

   
   //var collection = db.collection('urls');
    
   // var size = db.collection('urls').find().length;
   // console.log(size)
    if(input.slice(0,11)==="http://www."&&input.slice(-4)==='.com'){
       URL.findOne({'url': input}, {'url': input},function(err, link) {
 // console.log(document.name);
   if(!link){
    console.log(URL)
    //URL.count({},function(err,count){console.log(count)})
    URL.count({},function(count) { } );


                   /*let newvaule = new URL({url: input, tiny: count})
                   console.log(count)
                   newvaule.save(function(err){

    if (err) {
        throw new Error(err);
    }
//console.log(location);
    mongoose.connection.close()
  })*/
             

                   ("test2")
                } else{
                  console.log("test3")
                  res.send(link)
                }

                



                    return url
});
      
      
    } 
    // do some work here with the database.

    //Close connection
    
    console.log(ans)
  
  ;
  

  

});
var mongoose = require('mongoose');
 var db = mongoose.connect('mongodb://zakr:jessica1qq@ds033056.mlab.com:33056/zakrurls');
 var userSchema = new mongoose.Schema({url:String,tiny:Number});
 var userModel =db.model('userlists',userSchema);
 var anand = new userModel({ url: 'anand', tiny: 1});

 userModel.count({}, function(err, c) {
           console.log('Count is ' + c);
      });
 /*
 anand.save(function (err, docs) {
   if (err) {
       console.log('Error');
   } else {
       userModel.count({}, function(err, c) {
           console.log('Count is ' + c);
      });
   }
 }); */
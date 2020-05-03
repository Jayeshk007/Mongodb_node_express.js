const path=require('path');
var express=require('express');
var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/task";
var app=express();
app.set('views', __dirname + '/views')
app.set('view engine','pug');
app.route('/').get(function(req,res){
  MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
    if (err) throw err;
    data='';
    var dbo = db.db("task");
    dbo.collection("fdata").find({}).toArray(function(err, result) {
      if (err) throw err;
      res.render('new',{results:result});
      db.close();
    });
  });
});
var server=app.listen(1000,function() {
  console.log('1000 server is runnig');
});

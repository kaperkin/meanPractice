//require the mongoClient from mongodb module
//requires the MongoDB Node driver that we installed via
//npm. This is the required convention used in Node.js for bringing in external file
//dependencies to the current file in context.
var MongoClient = require('mongodb').MongoClient;

//mongodb configs
//we declare the variables for the database server information
//and collection we want to work with. Here, myproject is the database we want to
//use and chapters is the collection.
var connectionUrl = 'mongodb://localhost:27017/test_1',
    sampleCollection = 'chapters';

//We need to insert these chapters into mongoDB
var chapters = [{
    'Title': 'Snow Crash',
    'Author': 'Neal Stephenson'
}, {
    'Title': 'Snow Crash',
    'Author': 'Neal Stephenson'
}];


MongoClient.connect(connectionUrl, function(err, db) {

  console.log("Connected correctly to server");

  // Get some collection
  var collection = db.collection(sampleCollection);

  collection.insert(chapters,function(error,result){
    //here result will contain an array of records inserted
    if(!error) {
      console.log("Success :"+result.ops.length+" chapters inserted!");
    } else {
      console.log("Some error was encountered!");
    }
    db.close();
  });
});
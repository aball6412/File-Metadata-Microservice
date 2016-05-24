var express = require("express");
var app = express();
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

var port = process.env.PORT || 3000;

var dburl = process.env.MONGOLAB_URI || "mongodb://localhost:27017/file_metadata_microservice";


//Connect to MongoDB
MongoClient.connect(dburl, function(err, db) {
    
    if (err) {
        console.log("Could not connect to " + dburl);
    }
    else {
        console.log("Successful connection to " +  dburl);
    }
    
    //Save db connections here for reuse later
    
    
});





//Serve static documents when server requested from the homepage
app.use("/", express.static(__dirname + "/public"));


app.get("/", function(request, response) {
    
    
    //Do work here 
    
    
    
});


app.listen(port);



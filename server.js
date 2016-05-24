var express = require("express");
var app = express();
var multer = require("multer");
var upload = multer();

var port = process.env.PORT || 3000;


//Serve static documents when server requested from the homepage
app.use("/", express.static(__dirname + "/public"));


app.post("/api/fileanalyze", upload.single("mydoc"), function(request, response, next) {
    
        var display = {
            "filename": request.file.originalname,
            "filesize": request.file.size
        }
       
        console.log("File Size: " + request.file.size);
    
    response.send(display);

});


app.listen(port);



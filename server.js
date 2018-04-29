var express = require('express');

var app = express();

app.listen(1994, function(err) {
  if(err) throw err;
  console.log("Server is running on port 1994...");
});

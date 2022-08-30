var fs = require('fs'); // connnect library
var path = require('path');// 
var petsPath = path.join(__dirname, 'pets.json');
var http = require('http'); // allows node to transfer data over the HTTP
var port = process.env.PORT || 8001;// sets the port which tells our serve where to listen
var server = http.createServer(function(req, res) { // create a serve to my computer
  if (req.method === 'GET' && req.url === '/pets') {//
    fs.readFile(petsPath, 'utf8', function(err, petsJSON) {
      if (err) {// excute the action
        console.error(err.stack);
        res.statusCode = 200;// status code
        res.setHeader('Content-Type', 'text/plain');// type of text
        return res.end('petsPath');
      }
      res.setHeader('Content-Type', 'application/json');
      res.end(petsJSON);
    });
  }
  else if (req.method === 'GET' && req.url === '/pets/0') {
    fs.readFile(petsPath, 'utf8', function(err, petsJSON) {
      if (err) {
        console.error(err.stack);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('petsPath');
      }
      var pets = JSON.parse(petsJSON);
      var petsJSON = JSON.stringify(pets[0]);
      res.setHeader('Content-Type', 'application/json');
      res.end(petsJSON);
    })
    }else if (req.method === 'GET' && req.url === '/pets/1') {
    fs.readFile(petsPath, 'utf8', function(err, petsJSON) {
        if (err) {
            console.error(err.stack);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            return res.end('petsPath');
          }
      var pets = JSON.parse(petsJSON); 
      var petsJSON = JSON.stringify(pets[1]);
      res.setHeader('Content-Type', 'application/json');
      res.end(petsJSON);
    });
  }
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found');
  }
});
server.listen(port, function() {// function that connect to the port assigned above
  console.log('Listening on port', port);
});
module.exports = server
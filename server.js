'use strict'

var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/assets/:folder/:name', function(req, res){
    res.sendFile(__dirname + '/assets/' + req.params.folder + '/' + req.params.name);
});

http.listen(3000, function() {
    console.log('listening on *: 3000');
});
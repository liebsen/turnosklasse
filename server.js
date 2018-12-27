#!/usr/bin/env node

var express = require('express');
var path = require('path');
var _ = require('lodash');
var cors = require('cors')
var bodyParser = require('body-parser');
var app = express();

// Set static files
app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(cors())

app.get('*', function(req, res){
	res.sendFile('index.html', { root: __dirname + '/dist' });
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening at http://localhost:' + server.address().port);
});

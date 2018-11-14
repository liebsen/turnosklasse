#!/usr/bin/env node
var express = require('express');
var path = require('path');
var _ = require('lodash');
var cors = require('cors')
var bodyParser = require('body-parser');
var app = express();
var mercedes_dealers = require('./mercedes-dealers');
var mercedes_models = require('./mercedes-models');

// Set static files
app.use(express.static('dist'));
app.use(bodyParser.json());

app.get('/mercedes-dealers/:keyword',cors(), function(req, res){
	var keyword = req.params.keyword.toLowerCase();
	var results = _.filter(mercedes_dealers, function(item){
	  return item.nombre.toLowerCase().indexOf(keyword) > -1 || item.nombre.toLowerCase().indexOf(keyword) > -1;
	});
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(results));	
});

app.get('/mercedes-models/:keyword',cors(), function(req, res){
	var keyword = req.params.keyword.toLowerCase();
	var results = _.filter(mercedes_models, function(item){
	  return item.model.toLowerCase().indexOf(keyword) > -1;
	});
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(results));	
});

app.get('*', function(req, res){
	res.sendFile('index.html', { root: __dirname + '/dist' });
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening at http://localhost:' + server.address().port);
});
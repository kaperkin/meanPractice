//server.js

// set up ===================
var express = require('express');
var app = express(); //creates an instance of express
var mongoose = require('mongoose'); // mogoose for mongodb
var morgan = require('morgan'); //log requests to the console(express4)
var bodyParser = require('body-parser'); //pull information from HTML POSt (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

//configuration =========================
mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu'); //connects to mongoDB on modulus.io

app.use(express.static(__dirname + '/public')); //set the static files location /public/img will be /img for users
app.use(morgan('dev')); //log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); //parse application/x-www-form-urlencoded
app.use(bodyParser.json()); //parse application/json
app.use(bodyParser.json({type: 'application/vnd.api +json'})); //parse application/vnd.api+json as json
app.use(methodOverride());

//Define Todo Model =================
var Todo = mongoose.model('Todo', {
    text: String
});

// ROUTES ======================================

// API -------------------------------------------------
//get all todos
app.get('/api/todos', function (req, res) {
    // use mongoose to get al the todos in the database
    Todo.find(function (err, todos) {
        //if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err)
        }
        res.json(todos); //return all todos in JSON format
    });
});

// create todo and send back all todos after creation
app.post('/api/todos', function (req, res) {
    //create a todo, information comes from AJAX request from Angular
    Todo.create({
        text: req.body.text,
        done: false
    }, function (err, todo) {
        if (err) {
            res.send(err)
        }
        // get and return all the todos after you create another
        Todo.find(function (err, todos) {
            if (err) {
                res.send(err)
            }
            res.json(todos);
        });
    });
});

//delete a todo
app.delete('/api/todos/:todo_id', function (req, res) {
    Todo.remove({
        _id: req.params.todo_id
    }, function (err, todo) {
        if (err) {
            res.send(err);
        }
        // get and return all the todos after you create another
        Todo.find(function (err, todos) {
            if (err) {
                res.send(err)
            }
            res.json(todos);
        });
    });
});

// application home route-------------------------------------------
// the * signifies that the route will serve the index file for any route unless otherwise indicated
app.get('*', function(req, res){
    res.sendfile('./public/index.html'); // load the index.html, angular will handle the page changes on the front-end
});


// listen (start app with node server.js) ================
app.listen(8080);
console.log('app listening on port 8080');
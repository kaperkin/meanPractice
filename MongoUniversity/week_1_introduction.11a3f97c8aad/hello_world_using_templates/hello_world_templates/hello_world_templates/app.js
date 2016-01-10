var express = require('express'),
    app = express(),
    //consolidate is a library of a set of wrappers for template engine in express
//express requires template libraries to have certain interface, consolidate provides this
    engines = require('consolidate');

//registering nunjucks template  engine and associate with html extension
app.engine('html', engines.nunjucks);
//set the view enging to html
app.set('view engine', 'html');
//set where templates are located
// __dirname allows access to full path of views directory
app.set('views', __dirname + '/views');


//route of '/' is registered with get method
app.get('/', function(req, res) {
    //route handler
    //render instead of string that was used with res.end(<str>)
    // specify the template and give object to pass values
    res.render('hello', { name : 'Kaleena' });
});

app.use(function(req, res){
    res.sendStatus(404); 
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Express server listening on port %s', port);
});

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongo = require('mongodb').MongoClient;
var assert = require('assert');

var app = express();
var url = 'mongodb://localhost:27017/eventApplications';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

// API

// ====GET====

app.get('/eventApplications', function(req, res, next) {
    var applicationsArr = [];
    mongo.connect(url, function(err, db) {
        assert.equal(null, err);
        var cursor = db.collection('applications').find();
        cursor.forEach(function(doc, err) {
            assert.equal(null, err);
            applicationsArr.push(doc);
        }, function() {
            db.close();
        });
    });
});

// ====POST====

app.post('/insert', function(req, res, next) {
    var application = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        eventDate: req.body.eventDate
    };

    mongo.connect(url, function(err, db) {
        assert.equal(null, err);
        db.collection('applications').insertOne(application, function(err, result) {
            assert.equal(null, err);
            console.log('Item inserted');
            db.close();
        });
    });
    res.redirect('/');
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

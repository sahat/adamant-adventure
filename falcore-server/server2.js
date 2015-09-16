var falcor = require('falcor');
var falcorExpress = require('falcor-express');
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/'));

var $ref = falcor.Model.ref;

var model = new falcor.Model({
  cache: {
    events: [
      {
        name: "Disrupt SF 2015",
        description: "TechCrunch Disrupt is the world's leading authority in debuting revolutionary startups.",
        location: $ref('locationsById[0]')
      },
      {
        name: "Fluent Conference",
        description: "Learn to design & build websites using JavaScript, HTML5, CSS, Node & the latest web development frameworks at Fluent.",
        location: $ref('locationsById[0]')
      },
      {
        name: "PyCon",
        description: "PyCon is the largest annual gathering for the community using and developing the open-source Python programming language.",
        location: $ref('locationsById[1]')
      },
      {
        name: "HTML5 Developer Conference",
        description: "HTML5Devconf is the largest gathering of technical software developers, designers.",
        location: $ref('locationsById[0]')
      },
      {
        name: "JSConf",
        description: "JSConf has been the launch pad for many of the greatest things that we now take for granted on the web.",
        location: $ref('locationsById[2]')
      }
    ],
    locationsById: {
      0: {
        city: "San Francisco",
        state: "California"
      },
      1: {
        city: "Portland",
        state: "Oregon"
      },
      2: {
        city: "Amelia Island",
        state: "Florida"
      }
    }
  }
});


app.use('/model.json', falcorExpress.dataSourceRoute(function(req, res) {
  return model.asDataSource();
}));


var server = app.listen(5000);
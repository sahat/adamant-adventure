var falcor = require('falcor');
var falcorExpress = require('falcor-express');
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/'));


var model = new falcor.Model({
  cache: {
    events: [
      {
        name: "React.js Conf",
        description: "Join us at React.js Conf to shape the future of client-side applications!",
        location: { city: "Menlo Park", state: "California" }
      },
      {
        name: "Fluent Conference",
        description: "Learn to design & build websites using JavaScript, HTML5, CSS, Node & the latest web development frameworks at Fluent.",
        location: { city: "San Francisco", state: "California" }
      },
      {
        name: "PyCon",
        description: "PyCon is the largest annual gathering for the community using and developing the open-source Python programming language.",
        location: { city: "Portland", state: "Oregon" }
      },
      {
        name: "HTML5 Developer Conference",
        description: "HTML5Devconf is the largest gathering of technical software developers, designers.",
        location: { city: "San Francisco", state: "California" }
      },
      {
        name: "JSConf",
        description: "JSConf has been the launch pad for many of the greatest things that we now take for granted on the web.",
        location: { city: "Amelia Island", state: "Florida" }
      }

    ]
  }
});


app.use('/model.json', falcorExpress.dataSourceRoute(function(req, res) {
  return model.asDataSource();
}));


var server = app.listen(5000);
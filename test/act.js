// var generate = require('../act.js');

var colors = [[255, 0, 0],
              [0, 255, 0],
              [0, 0, 255]];

var dataURL = generate(colors, function(err, dataURL) {
    console.log(dataURL);
});

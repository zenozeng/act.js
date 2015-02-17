// There is no version number written in the file.
// The file contains 256 RGB colors.
// The first color in the table is index zero.
// There are three bytes per color in the order Red, Green, Blue.

var generate = function(colors, callback) {
    var array = new Uint8Array(256 * 3 + 2 * 2);
    var i, color;
    for(i = 0; i < 256 * 3; i++) {
        array[i] = 0;
    }
    for(i = 0; i < colors.length; i++) {
        color = colors[i];
        array[3 * i] = color[0]; // R
        array[3 * i + 1] = color[1]; // G
        array[3 * i + 2] = color[2]; // B
    }
    var blob = new Blob([array], {type: "application/octet-stream"});
    var reader = new FileReader();
    reader.onload = function(ev) {
        var err = null;
        callback(err, ev.target.result);
    };
    reader.readAsDataURL(blob);
};

module.exports = generate;

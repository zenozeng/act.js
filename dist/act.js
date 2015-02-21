!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.ACT=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])(1)
});
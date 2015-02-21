# act.js

Create Adobe Color Table (.act) files using Uint8Array, Blob API and FileReader API.

## Usage

### Browserify

```bash
npm install act-js --save
```

```javascript
var generate = require('act-js');
var colors = [[255, 0, 0], [0, 255, 0], [0, 0, 255]];
generate(colors, function(err, dataURL) {
    console.log(dataURL);
});
```

## FAQ

### Use .act in GIMP?

In Palettes, select a palette and right click it, choose import palette.

## Ref

- [Adobe Photoshop File Formats Specification](http://www.adobe.com/devnet-apps/photoshop/fileformatashtml/)

- https://github.com/bdon/actpalette

- [大端和小端（Big endian and Little endian）](http://www.cnblogs.com/luxiaoxun/archive/2012/09/05/2671697.html)

- https://developer.mozilla.org/en-US/docs/Web/API/Blob

- http://stackoverflow.com/questions/12539058/is-there-a-default-mime-type

- https://forums.adobe.com/message/2205681#2205681

- [Color swatch file formats](http://www.selapa.net/swatches/colors/fileformats.php)

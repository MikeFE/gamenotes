const fs = require('fs')
const vdf = require('steam-binary-vdf')

const inBuffer = fs.readFileSync('C:/Program Files (x86)/Steam/userdata/216728/config/shortcuts.vdf')

const shortcuts = vdf.readVdf(inBuffer);
console.log(shortcuts); // output below;
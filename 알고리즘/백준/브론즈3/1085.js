// const fs = require('fs');
// const [x, y, w, h] = fs.readFileSync('/dev/stdin').toString().split(" ").map(text => Number(text));

const [x, y, w, h] = [6, 2, 10, 3];

console.log(Math.min(x, y, Math.abs(w - x), Math.abs(h - y)));

// const fs = require('fs');
// const [N, M] = fs.readFileSync('/dev/stdin').toString().split(" ").map(text => Number(text));

const [N, M] = `1 1`.split(' ').map((text) => Number(text));

console.log(Number(N === M));

// const fs = require('fs');
// const [n, m, k] = fs.readFileSync('/dev/stdin').toString().split(" ").map(text => Number(text));

const [n, m, k] = `4 3 2`.split(' ').map((text) => Number(text));

console.log((m > k ? k : m) + (n - m > n - k ? n - k : n - m));

// const fs = require('fs');
// const [n, m] = fs.readFileSync('/dev/stdin').toString().split(" ").map(text => Number(text));

const [n, m] = `3 3`.split(' ').map((text) => Number(text));

console.log(m < 3 ? 'NEWBIE!' : m <= n ? 'OLDBIE!' : 'TLE!');

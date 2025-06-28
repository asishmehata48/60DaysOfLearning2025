const fs = require('fs');

fs.writeFileSync('output.txt', 'Hello, Node.js!');

const data = fs.readFileSync('output.txt', 'utf-8');
console.log(data);

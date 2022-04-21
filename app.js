// console.log(global)

// setTimeout( () => {
//     console.log('In the timeout');
//     clearInterval(int);
// }, 3000)

// const int = setInterval(() => {
//     console.log('interval')
// }, 1000)

// console.log(__dirname);
// console.log(__filename);

const { people, ages } = require('./people');

console.log(people, ages)

const para = require('os');

console.log(para.platform(), para.homedir());


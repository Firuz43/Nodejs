const fs = require('fs');

const readStream = fs.createReadStream('./blog/text3.txt');
const writeStream = fs.createWriteStream('./blog/text4.txt')

readStream.on('data', (chunk) => {
    console.log('----New Chunk----')
    console.log(chunk.toString())
    writeStream.write('\nNew Chunk\n');
    writeStream.write(chunk);
})
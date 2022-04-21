const fs = require('fs')

// fs.writeFile('./blog/text.txt', 'Hello World', () =>{
//     console.log('file was written')
// })

// fs.writeFile('./blog/text2.txt', 'Hello again', () =>{
//     console.log('file was written')
// })
if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets', () => {
        if(err) {
            console.log(err);
        }
        console.log('folder created')
    }) 
}else {
    fs.rmdir('./assets', (err) =>{
        if(err) {
            console.log(err)
        }
    })
}

if (fs.existsSync('./blog/deleteme.txt')) {
    fs.unlink('./blog/deleteme.txt', (err) => {
        console.log(err)
    })
    console.log('file deleted')
}
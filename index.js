var http= require('http');
const fs = require('fs')
var dir = './abc';

/*fs.mkdir(dir,(error)=>{
    console.log('yes folder created successfully');
});*/
fs.writeFile('abc/index.js','my name is khan',(error,data)=>{
    console.log('file created successfully');
})
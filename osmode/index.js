const os = require('os');
const freememory= os.freemem();
console.log(`${freememory/1024/1024/1024}`);
const file =require("fs");
const biodata ={name:'khan',age:30,edu:'bscs'};

/*create and write.
const jsondata = JSON.stringify(biodata);
var writeStream=file.createWriteStream('/json.js');
writeStream.write(jsondata);
writeStream.end();*/
function readData(err, data) {
    console.log(JSON.parse(data));
}
file.readFile('json.js', 'utf8', readData);

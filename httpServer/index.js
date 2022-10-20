const http = require('http');
const fs= require('fs');
var data =fs.readFileSync(`${__dirname}/userApi/userapi.json`,'utf-8');
    var result = JSON.parse(data)
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('response from home side side');
    } else if (req.url == '/about') {
        res.end('response from about us page side side');
    } else if (req.url == '/contact') {
        res.end('response from contact us page side side');
    } else if (req.url == '/api') {
     res.writeHead('200',{'Content-type':'application/json'});
            console.log(result)
         res.end(result[0].title);
        }

     else {
        res.writeHead(404, {"Content-type": "text/html"});
        res.end('404 page');
    }


});
server.listen(8000, '127.0.0.1', () => {
    console.log('listion on 8000')
});
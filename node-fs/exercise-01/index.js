const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end('Hola Codeable')
    } else if (req.url === "/users") {
        const users = [{name: "Tom"},{name: "Jerry"}]
        res.writeHead(200, {"Content-Type": "application/json"})
        res.write(JSON.stringify(users))
        res.end();
    } else if (req.url.includes("/notes/")) {
        // enviar la nota recibida en la peticion
        // /notes/1 => enviar la nota con id : 1
        console.log(__dirname);
        console.log(req.url)
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"})
        res.end()
    }
});

server.listen(3000, () => {console.log('listening on port 3000')});
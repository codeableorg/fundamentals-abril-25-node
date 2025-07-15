// TODO : modificar el servidor para que envie el archivo charmander.png cuando reciba la peticion a la URL '/charmander.png'

// importar el modulo fs
const http = require("http")
// import http from "node:http";
const fs = require("fs")
// import fs from "node:fs";
const path = require("path")
// import path from "node:path";
// import { fileURLToPath } from "node:url";

const PORT = 3000;

// crear una funcion requestListener
function requestListener(req, res) {

  if (!req.url) {
    res.end("URL no permitida");
  }

  // variables globales de CommonJS
  // const __filename = fileURLToPath(import.meta.url); 
  // const __dirname = path.dirname(__filename);
  console.log(__dirname)
  const filePath = path.join(__dirname, "public", req.url); // nos brinda la ruta completa del archivo que vamos a leer
  console.log(filePath);

  const ext = path.extname(filePath);
  let contentType = "text/html";
 
  switch (ext) {
    case ".txt" : {
      contentType = "text/plain";
      break;
    }
    case ".css": {
      contentType = "text/css";
      break;
    }
    case ".js": {
      contentType = "text/javascript";
      break;
    }
    case ".jpg":
    case ".jpeg": {
      contentType = "image/jpeg";
      break;
    }
    case ".png": {
      contentType = "image/png"
    }

  }


  // leer el archivo
  fs.readFile(filePath, "utf-8", (error, content) => {
    if (error) {
      console.log(error);
      return;
    }

    res.writeHead(200, { "Content-Type": contentType });
    res.end(content);
  });
}

// crear el servidor web
const server = http.createServer(requestListener);

// inicir el servidor
server.listen(PORT);

// TODO : modificar el servidor para que envie el archivo charmander.png cuando reciba la peticion a la URL '/charmander.png'

// importar el modulo fs
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PORT = 3000;

// crear una funcion requestListener
function requestListener(req, res) {

  if (!req.url) {
    res.end("URL no permitida");
  }

  // variables globales
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "public", req.url);
  console.log(filePath);

  // leer el archivo
  fs.readFile(filePath, "utf-8", (error, content) => {
    if (error) {
      console.log(error);
      return;
    }

    // res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(content);
  });
}

// crear el servidor web
const server = http.createServer(requestListener);

// inicir el servidor
server.listen(PORT);

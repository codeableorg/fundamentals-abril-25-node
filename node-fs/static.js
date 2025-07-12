// TODO : modificar el servidor para que envie el archivo charmander.png cuando reciba la peticion a la URL '/charmander.png'

// importar el modulo fs
import http from "node:http";
import fs from "node:fs";

const PORT = 3000;

// crear una funcion requestListener
function requestListener(req, res) {
  if (req.url === "/") {
    res.end("Hola");
  } else if (req.url === "/hello.txt") {
    // encontrar el archivo
    const filePath =
      "/home/david-codeable/fundamentals-mayo-25/teaching-notes/node-fs/public/hello.txt";

    // leer el archivo
    fs.readFile(filePath, "utf-8", (error, content) => {
      if (error) {
        console.log(error);
        return;
      }

      res.end(content);
    });
  } else if (req.url === '/index.html') {
    // encontrar el archivo
    const filePath = '/home/david-codeable/fundamentals-mayo-25/teaching-notes/node-fs/public/index.html'

    // leer el archivo
    fs.readFile(filePath, "utf-8", (error, content) => {
      if (error) {
        console.log(error);
        return;
      }

      res.end(content);
    });
  } else if (req.url === '/charmander.png') {
    // encontrar el archivo
    const filePath = '/home/david-codeable/fundamentals-mayo-25/teaching-notes/node-fs/public/charmander.png'

    // leer el archivo
    fs.readFile(filePath, null, (error, content) => {
      if (error) {
        console.log(error);
        return;
      }

      res.end(content);
    });

  } else {
    console.log("recibi una peticion a otra URL diferente de '/'");
    res.end("URL no permitida");
  }
}

// crear el servidor web
const server = http.createServer(requestListener);

// inicir el servidor
server.listen(PORT);

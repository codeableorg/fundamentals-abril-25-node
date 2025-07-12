import fs from "node:fs";
import http from "node:http";

// mostrar en consola el contenido de notes.json.
function requestListener(req, res) {
  const filePath =
    "/home/david-codeable/fundamentals-mayo-25/teaching-notes/node-fs/notes.json";
  fs.readFile(filePath, "utf-8", (error, content) => {
    if (error) {
      console.log(error);
      return;
    }
    const notes = JSON.parse(content); // convertir un string a objeto JS
    console.log(notes);
  });
  res.end();
}

const server = http.createServer(requestListener);

server.listen(3000);

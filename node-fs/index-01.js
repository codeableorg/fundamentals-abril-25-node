import fs from 'node:fs' 
import http from 'node:http'

// mostrar en consola el contenido de hello.txt.
function requestListener (req, res) {
    // const filePath = '/home/david-codeable/fundamentals-mayo-25/teaching-notes/node-fs/hello.txt'
    const filePath = '/home/david-codeable/fundamentals-mayo-25/teaching-notes/node-fs/index.html'
    fs.readFile(filePath, 'utf-8', (error, content) => {
        if (error) {
            console.log(error)
            return;
        }
        console.log(content);
    })
    res.end()
}


const server = http.createServer(requestListener)

server.listen(3000)

import fs from 'node:fs' 
import http from 'node:http'

// crear un archivo 'bye.txt' || sobre escribir el archivo 'bye.txt'
function requestListener (req, res) {
    const content = 'bye Codeable tambien'
    const filePath = '/home/david-codeable/fundamentals-mayo-25/teaching-notes/node-fs/bye.txt'
    fs.writeFile(filePath, content, (error) => {
        if (error) {
            console.log(error)
            return;
        }
    })
    res.end()
}

const server = http.createServer(requestListener)

server.listen(3000)

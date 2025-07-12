import fs from 'node:fs' 
import http from 'node:http'

// copiar hello.txt a hello_copy.txt
function requestListener (req, res) {
    let contentCopy = null
    const filePath1 = '/home/david-codeable/fundamentals-mayo-25/teaching-notes/node-fs/hello.txt'
    const filePath2 = '/home/david-codeable/fundamentals-mayo-25/teaching-notes/node-fs/hello_copy.txt'
    fs.readFile(filePath1, 'utf-8', (error, content) => {
        if (error) {
            console.log(error)
            return;
        }

        // solo copio el contenido, no lo cambio
        contentCopy = content 

        fs.writeFile(filePath2, contentCopy, (error) => {
            if (error) {
                console.log(error)
                return;
            }
            
            res.end()
        })
 
    })

}

const server = http.createServer(requestListener)

server.listen(3000)

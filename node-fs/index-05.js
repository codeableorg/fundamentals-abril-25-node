import fs from 'node:fs' 
import http from 'node:http'

// agregar nueva nota a notes.json
function requestListener (req, res) {
    let newNote = {
        id : 4,
        content: 'note 4'
    }
    const filePath = '/home/david-codeable/fundamentals-mayo-25/teaching-notes/node-fs/notes.json'
    fs.readFile(filePath, 'utf-8', (error, content) => {
        if (error) {
            console.log(error)
            return;
        }

        // modificamos el nuevo del archivo
        const notes = JSON.parse(content)
        notes.push(newNote)
        const updatedNotes = JSON.stringify(notes)

        fs.writeFile(filePath, updatedNotes, (error) => {
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

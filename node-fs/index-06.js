import fs from 'node:fs' 
import http from 'node:http'

// agregar nueva nota que viene en el request a notes.json
function requestListener (req, res) {
    if (req.method !== 'POST') {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method not allowed');
        return;
    }
    const filePath = '/home/david-codeable/fundamentals-mayo-25/teaching-notes/node-fs/notes.json'
    fs.readFile(filePath, 'utf-8', (error, content) => {

        if (error) {
            console.log('Error reading file:', error);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal server error');
            return;
        }

        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const notes = JSON.parse(content)
                const newNote = JSON.parse(body)
                notes.push(newNote)
                const updatedNotes = JSON.stringify(notes)

                fs.writeFile(filePath, updatedNotes, (error) => {
                    if (error) {
                        console.log('Error writing file:', error)
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error saving note')
                        return;
                    }
                    
                    res.writeHead(200, { 'Content-Type': 'application/json' })
                    res.end(JSON.stringify({ message: 'Note added successfully', note: newNote }))
                })
            } catch (parseError) {
                console.log('JSON parsing error:', parseError.message)
                res.writeHead(400, { 'Content-Type': 'text/plain' })
                res.end('Invalid JSON format. Please use double quotes for property names and string values.')
            }
        })

    })

}

const server = http.createServer(requestListener)

server.listen(3000)

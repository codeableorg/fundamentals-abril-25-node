import http from 'node:http'

const notes = [
  { id: 1, content: "Hacer la cama" },
  { id: 2, content: "Lavar los platos" },
  { id: 3, content: "Estudiar JavaScript" },
  { id: 4, content: "Hacer las compras" },
  { id: 5, content: "Limpiar mi habitación" },
  { id: 6, content: "Almorzar a tiempo" },
];

const requestListener = (req, res) => {
    if (req.url === '/') {
        res.end('hola codeable')
    } else if (req.url === '/notes') {
        res.end('notes')
    } else if ((req.url).includes('notes')) {
        console.log(JSON.stringify(req.url))
        const reqArray = (req.url).split('/')
        const id = reqArray[2]
        res.end(JSON.stringify(notes.find(note => note.id === parseInt(id))))
    } else {
        res.end('unknown route')
    }
}

const server = http.createServer(requestListener)

server.listen(3000)
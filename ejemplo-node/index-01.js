import http from 'node:http'

const requestListener = (req, res) => {
    res.end('hola codeable')
}

const server = http.createServer(requestListener)

server.listen(3000)
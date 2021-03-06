const app = require('express')()
const cors = require('cors')
const http = require('http')
const socketio = require('socket.io')

app.use(cors())

const server = http.createServer(app)
const io = socketio(server)

io.on( 'connection', socket => {
  socket.on( 'conectado', () => {
    console.log('usuario conectado')
  })
})

module.exports = server

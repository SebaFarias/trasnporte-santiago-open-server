const express = require('express')
const cors = require('cors')
const http = require('http')
const socketio = require('socket.io')
const helmet = require('helmet')
const driverRoutes = require('./src/Routes/driver')
const viajeRoutes = require('./src/Routes/viaje')
const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Rutas
app.use('/api/v1/driver', driverRoutes)
app.use('/api/v1/viaje', viajeRoutes)
app.get('/', ( req, res ) => {
  res.json({
    msg: 'Santiago Open API REST | conductores'
  })
})

const server = http.createServer(app)
const io = socketio(server)

io.on( 'connection', socket => {
  socket.on( 'conectado', () => {
    console.log('usuario conectado')
  })
})

module.exports = server
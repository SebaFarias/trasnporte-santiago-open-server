const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const driverRoutes = require('./src/Routes/driver')
const viajeRoutes = require('./src/Routes/viaje')
const app = express()

app.use(cors())
app.use(helmet())
app.use(morgan('common'))
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

module.exports = app
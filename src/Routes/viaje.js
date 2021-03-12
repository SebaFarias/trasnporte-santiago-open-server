const express = require('express')
const router = express.Router()

const{
  comenzarViaje,
  terminarViaje,
} = require('../Controllers/viaje')

router
.post('/comenzarViaje:viajeId',comenzarViaje)
.post('/terminarViaje:viajeId', terminarViaje)

module.exports = router
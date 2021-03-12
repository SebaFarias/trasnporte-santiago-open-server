const express = require('express')
const router = express.Router()

const{
  comenzarViaje,
  terminarViaje,
} = require('../Controllers/viaje')

router
.put('/comenzarViaje',comenzarViaje)
.post('/terminarViaje:viajeId', terminarViaje)

module.exports = router
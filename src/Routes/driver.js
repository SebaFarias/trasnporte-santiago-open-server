const express = require('express')
const router = express.Router()
const {
  getDrivers,
  createDriver,
} = require('../Controllers/driver')

router
  .get('/getDrivers', getDrivers)
  .put('/createDriver', createDriver)

module.exports = router
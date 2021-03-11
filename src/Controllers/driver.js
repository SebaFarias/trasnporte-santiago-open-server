const  Driver  = require('../models/driver')

const driverMethods = {
  getDrivers: async ( req , res ) => {
    try{
      const drivers = await Driver.find()
      res.json(drivers)
    }
    catch( err ){
      res.status(400).json({error: err})
    }
  },
  createDriver: async ( req, res ) => {
    const { nombre, auto } = req.body
    try {
      const newDriver = new Driver ({
        name: nombre,
        car: auto,
      })
      await newDriver.save()
      res.status(201).json(newDriver)
    }
    catch( err ){
      res.status(400).json({
        error: err,
      })
    }
  },
  
}

module.exports = driverMethods
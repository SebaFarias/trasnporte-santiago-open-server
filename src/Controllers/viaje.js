const Viaje = require('../Models/viaje')

const viajeMethods = {
  comenzarViaje: async ( req, res ) => {
    console.log( 'req' )
    const {
      choferId,
      origen,
      destino,
      pasajeros,
      inicio,
    } = req.body
    try{
      const newViaje = new Viaje({
        terminado: false,
        driver:choferId,
        origen: origen,
        destino: destino,
        pasajeros: pasajeros,
        inicio: inicio,
      })
      await newViaje.save()
      res.status(201).json(newViaje)
    }
    catch(err){
      console.log(err)
      res.status(400).json({
        error: err,
      })
    }
  },
  terminarViaje: async ( req, res ) => {
    const { rutaId } = req.params
    try{

      const {
        driver,
        fin,
        origen,
        destino,
        pasajeros,
      } = req.body
      const update = {
        terminado: true,
        driver: driver,
        fin: fin,
        origen:origen,
        destino:destino,
        pasajeros:pasajeros,
      }
      const options = {}
      Viaje.findByIdAndUpdate(rutaId,update,options,( err, docs )=>{
        if(err){
          res.status(400).json({error: err})
        } else {
          res.status(200).json({
            message: "Viaje terminado correctamente",
            data: docs,
          }) 
        }
      })
    }
    catch( err ){
      res.status(500).json({error: err})
    }

  },
}

module.exports = viajeMethods
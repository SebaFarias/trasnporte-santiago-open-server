const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const itemSchema = mongoose.Schema({
  
  terminado: {
    type: Boolean,
    required: true,
  },
  driver: {
    type: String,
    required: true,
    unique: true,
  },
  origen: {
    type: String,
    required: true,
  },
  destino: {
    type: String,
    required: true,
  },
  pasajeros: {
    type: Number,
    required: true,
  },
  inicio: {
    type: Date,
    required: true,
  },
  fin: Date,
},{
  timestamps: true,
  versionKey: false,
})

module.exports = mongoose.model( 'Viaje' , itemSchema)
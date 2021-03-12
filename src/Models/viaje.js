const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const itemSchema = mongoose.Schema({
  
  terminado: { type: Boolean, required: true, unique: false, sparse: true},
  driver:    { type: String,  required: true, unique: false, sparse: true},
  origen:    { type: String,  required: true, unique: false, sparse: true},
  destino:   { type: String,  required: true, unique: false, sparse: true},
  pasajeros: { type: Number,  required: true, unique: false, sparse: true},
  inicio:    { type: Date,    required: true, unique: false, sparse: true},
  fin: Date,
},{
  timestamps: true,
  versionKey: false,
})

module.exports = mongoose.model( 'Viaje' , itemSchema)
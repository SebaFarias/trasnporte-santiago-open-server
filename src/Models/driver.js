const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  car: {
    type: String,
    required: true,
    unique: true,
  },
},{
  timestamps: true,
  versionKey: false,
})

module.exports = mongoose.model( 'Driver' , itemSchema)
const config = require('../../config/config')
const mongoose = require('mongoose')
const {Schema} = require('mongoose')


const UserSchema = new mongoose.Schema({
    nombre: { 
      type: String, min: 3
    },
    imagen: { 
      type: String, default: 'hahaha' 
    },
    correo: { 
      type: String
    },
    password: { 
      type: String  
    },
    datos: { type: Schema.Types.ObjectId, ref: 'datos-usuario' }
  },{
    timestamps: true,
    versionKey: false
  });

  UserSchema.methods.setImagen = function setImagen(fileName) {
    this.imagen = `${config.HOST}public/${fileName}`; //:${config.PORT}
  }

  module.exports = mongoose.model('usuario', UserSchema)

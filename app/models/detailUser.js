const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const DetailUserSchema = new mongoose.Schema({
    apellidoPat: { 
      type: String 
    },
    apellidoMat: { 
      type: String 
    },
    telefono: { 
      type: Number, min: 10
    },
    edad: { 
      type: Number 
    },
    prioridad: { 
      type: String
    },
    problema: { 
      type: String
    },
    curp: { 
      type: String
    },
    usuario: { 
      type: Schema.Types.ObjectId,
      ref: "usuario"
    },
  },
  {
    timestamps: true,
    versionKey: false
  });

  module.exports = mongoose.model('datos-usuario', DetailUserSchema)
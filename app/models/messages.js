const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const MessageSchema = new mongoose.Schema({
    mensaje: { 
      type: String,
    },
    usuario_id: { 
      type: Schema.Types.ObjectId,
      ref: "usuario"
    },
    recibido_id: { 
      type: Schema.Types.ObjectId,
      ref: "usuario"
    }
  }, {
    timestamps: true,
    versionKey: false
  });

  module.exports = mongoose.model('mensaje', MessageSchema)
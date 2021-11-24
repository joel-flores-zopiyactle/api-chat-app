const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const MessageSchema = new mongoose.Schema({
    usuario_id: { 
      type: Schema.Types.ObjectId,
      ref: "usuario"
    },
    contacto_id: { 
      type: Schema.Types.ObjectId,
      ref: "usuario"
    }
  }, {
    timestamps: true,
    versionKey: false
  });

  module.exports = mongoose.model('contacto', MessageSchema)
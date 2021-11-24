const express = require('express')
const router = express.Router();
const { enviarMensaje ,todosLosMensajes } = require('./../controllers/chat')

//TODO: Enviamos un mensaje
router.post('/send', enviarMensaje);
//TODO: Obtenemos un todos los mensajes 
router.get('/messages', todosLosMensajes);

module.exports = router
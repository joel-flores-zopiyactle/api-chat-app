const express = require('express')
const router = express.Router();
const { agregarContacto, obtenerContactoId } = require('./../controllers/user')

router.post('/contact', agregarContacto);
router.get('/contact/:id', obtenerContactoId);

module.exports = router
const express = require('express')
const upload  = require('./../helpers/handleImg')
const router = express.Router();
const { crearCuenta, iniciarSesion , obtenerDatosContacto, obtenerDatosUsuario } = require('./../controllers/auth')

router.post('/singup', upload.single('imagen'), crearCuenta);
router.post('/singin', iniciarSesion);
router.get('/user/contact/:id', obtenerDatosContacto);
router.get('/user/:id', obtenerDatosUsuario);

module.exports = router
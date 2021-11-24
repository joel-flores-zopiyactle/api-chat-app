const contactoModelo = require('../models/contact')
//const resError = require('../helpers/handleError')

const agregarContacto = async (req, res) => {
    try {
        
        const {usuario_id, contacto_id} = req.body

        const nuevoContacto = await contactoModelo.create({
            usuario_id, contacto_id
        })

        res.send({ data: nuevoContacto});

    } catch (error) {
        //resError(res, error)
        console.log(error);
    }
}


const obtenerContactoId = async (req, res) => {
    try {
        
        const id = req.params.id
        const contacto = await contactoModelo.findOne({usuario_id: id})
        res.status(200);
        res.send(contacto);

    } catch (error) {
       // resError(res, error)
       console.log(error);
    }
}


module.exports = { agregarContacto, obtenerContactoId }
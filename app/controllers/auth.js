const usuarioModelo = require('../models/user')
const datosUsuarioModelo = require('../models/detailUser')
//const resError = require('../helpers/handleError')

// Create account
const crearCuenta = async (req, res) => {
    
    try {
        const {nombre, correo, password} = req.body
        const archivo = req.file
        const {apellidoPat, apellidoMat, telefono, edad, prioridad, problema, curp} = req.body
        
        const imagen = archivo.path
      
        const nuevoUsuario = await usuarioModelo({
            nombre, imagen, correo, password 
        })

        if(req.file) {
            nuevoUsuario.setImagen(req.file.filename)
        }

        const usuarioSave = await nuevoUsuario.save()
        console.log(usuarioSave)

        const detailUser = await datosUsuarioModelo.create({
            apellidoPat, apellidoMat, telefono, edad, prioridad, problema, curp, usuario: usuarioSave.id
        })

        res.status(201).send({ data: detailUser});

    } catch (error) {
        //resError(res, error)
        console.log(error);
    }

}

const iniciarSesion = async (req, res) => {
    
    try {
        const {correo, password} = req.body
              
        const usuario = await usuarioModelo.findOne({ 'correo': correo});  
        
        if(usuario) {

            if(usuario.correo === correo && usuario.password === password) {

                res.status(200);
                res.json({
                    data: usuario
                });
    
            } else {
                
                res.status(204);
                res.send({
                    error: 'Los datos son incorrectos'
                });
            }

        } else { res.status(404).json({error: "Usuario no encontrado"}) }
       
        

       

    } catch (error) {
        //resError(res, error)
        console.log(error);
    }
}

const obtenerDatosUsuario = async (req, res) => {
    
    try {

        let { id } = req.params

        const user = await datosUsuarioModelo.
        findOne({'usuario':id}).populate('usuario', {
            _id: 1, 
            nombre: 1, 
            imagen: 1, 
        }
        )
        .exec((err, user) => {
           if(!err) {
                //console.log(user);
            res.status(200);
            res.json(user);
           } else {
            res.status(204).send(
                {
                    error: "No se encontraron datos del contacto"
                }
            );
           }

           
        });        

    } catch (error) {
        //resError(res, error)
        console.log(error);
    }
}

const obtenerDatosContacto = async (req, res) => {
    
    try {

        let { id } = req.params

        const user = await datosUsuarioModelo.
        findOne({'usuario':id}).populate('usuario', {
            nombre: 1, 
            imagen: 1, 
            correo: 1, 
        })
        .exec((err, user) => {
           if(!err) {
                //console.log(user);
            res.status(200);
            res.json(user);
           } else {
            res.status(204).send(
                {
                    error: "No se encontraron datos del contacto"
                }
            );
           }

           
        });        

    } catch (error) {
        //resError(res, error)
        console.log(error);
    }
}


module.exports = { crearCuenta, iniciarSesion, obtenerDatosUsuario, obtenerDatosContacto }
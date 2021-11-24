const mongoose = require('mongoose')

const dbConnect = () => {
  
    mongoose.connect('mongodb+srv://joel13:12345678joel@iventas.geh69.mongodb.net/i-ventas?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) => {
        if (!err) {
            console.log('**** CONEXION ESTABLECIDA **** ');
        } else {
            console.log('**** FAlLO AL CONECTARSE A LA BD **** ', err);
        }
    })
}

module.exports = {dbConnect}
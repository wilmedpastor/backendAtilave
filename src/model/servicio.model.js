const mongoose = require('mongoose');
const {Schema} = require('mongoose');

let servicioSchema = new Schema({    
    codigo: String,
    tipo_automotor: String,
    tipo_procedimiento: String,
    precio: String,
    duracion:String,    

},
{versionKey: false});

const Service = mongoose.model('Service', servicioSchema);
module.exports = Service;

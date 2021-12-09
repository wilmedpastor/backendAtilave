const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const {Schema} = mongoose;

const personSchema = new Schema ({
    tip_documento: {type: String, required:true},
    num_documento: {type: String, required:true, unique: true},
    nombres: {type: String, required:true},
    apellidos: {type: String, required:true},
    celular: {type: String, required:true},
    direccion: {type: String, required:true},
    ciudad: {type: String, required:true},
    email: {type: String, required:true, unique: true},
    password: {type: String, required:true},     
    token:String 
},
{versionkey: false});

personSchema.pre('save', function(next){
    bcrypt.genSalt(10).then(salts => {
        bcrypt.hash(this.password, salts).then(hash => {
            this.password = hash;
            next();
        }).catch(error => next(error));
    }).catch(error => next(error));
});

const Person = mongoose.model('Persona', personSchema);

module.exports = Person;
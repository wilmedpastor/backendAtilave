const Persona = require('../model/persona.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


function login(req, res) {
    let email = req.body.email;
    let password = req.body.password;

    Persona.findOne({email})    
        .then(persona => {           
            if(!persona) return res.status(404).send({message: 'El usuario no existe'});
            bcrypt.compare(password, persona.password)
                .then(match => {                    
                    if(match){
                        payload = {
                            email: persona.email,
                            nombres: persona.nombres,
                            apellidos: persona.apellidos
                        }
                        jwt.sign(payload,process.env.TOKEN_KEY,function(error,token){
                            if(error){
                                res.status(500).send({error});
                            }else{
                                res.status(200).send({message:'ACCESO APROBADO', token});
                            }
                        })
                    }else{
                        res.status(200).send({message: 'PASSWORD INCORRECTO'});
                    }                      
                }).catch(error => {
                    console.log(error);
                    res.status(500).send({error});
                });
        }).catch(error => {
            console.log(error);
            res.status(500).send({error});
        });
}

module.exports = login;
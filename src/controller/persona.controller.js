const personaCtrl = {};
const Person = require('../model/persona.model')
const jwt = require('jsonwebtoken')

personaCtrl.getPersonas = async (req, res) => {
    try {
        const personas = await Person.find({});
        res.json(personas);
    } catch (error) {
        console.log(error);
    }
};

personaCtrl.getPersona = async (req, res) => {
    try {
        const personas = await Person.findOne({ num_documento: req.params.num_documento });
        if (personas.lenght == 0 || personas == null) {
            res.send('No se encontró la persona');
        } else {
            res.json(personas);
        }
    } catch (error) {
        console.log(error);
    }
};

personaCtrl.createPersona = async (req, res) => {
    try {
        const personTemp = {
            tip_documento: req.body.tip_documento,
            num_documento: req.body.num_documento,
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            celular: req.body.celular,
            direccion: req.body.direccion,
            ciudad: req.body.ciudad,
            email: req.body.email,
            password: req.body.password,
            token: req.body.token,
        }
        let _persona = new Person(personTemp);
        await _persona.save();
        res.send('Persona creada')
    } catch (error) {
        console.log(error);
    }
};

personaCtrl.editPersona = async (req, res) => {
    try {
        const personTemp = {
            tip_documento: req.body.tip_documento,
            num_documento: req.body.num_documento,
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            celular: req.body.celular,
            direccion: req.body.direccion,
            ciudad: req.body.ciudad,
            email: req.body.email,
            password: req.body.password,

        };
        await Person.updateOne({ num_documento: req.params.num_documento }, personTemp);
        res.send('Persona Actualizada');
    } catch (error) {
        console.log(error);
    }
};
personaCtrl.deletePersona = async (req, res) => {
    try {
        await Person.deleteOne({ num_documento: req.params.num_documento });
        res.send('Persona eliminada correctamente');
    } catch (error) {
        console.log(error)
    }
};

personaCtrl.token = async (req, res) => {
    try {
        const { num_documento } = req.body;
        if (!(num_documento)) {
            res.status(400).send('Número de Cedula Requerido');
        }else{
            const prs = await Person.findOne({ num_documento: num_documento });
            if (prs) {
                const token = jwt.sign({ user_id: prs._id, num_documento }, process.env.TOKEN_KEY, { expiresIn: '15m' })    
                await Person.updateOne({ num_documento: num_documento }, { token: token })
                res.status(201).json(token);
            }else{
                res.status(400).send('Credenciales invalidas') 
            }    
        }
    } catch (error) {
        console.log(error);
        res.send('Ocurrió un error interno');
    }
};

module.exports = personaCtrl;


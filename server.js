const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const Login = require('./src/routes/login.route');


//middlewares
app.use(bodyParser.json());

app.use((req, res, next) => {
    //Dominio que tengan accesso
    res.setHeader('Access-Control-Allow-Origin', '*');
    //metodos de solicitud que desea permitir
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    //Encabezados que se permiten
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
})
app.use(cors());
//Rutas
app.use('/login',Login);
app.use(require('./src/routes/main.routes'));
app.use(require('./src/routes/persona.route'));
app.use(require('./src/routes/servicio.route'));

module.exports = app;

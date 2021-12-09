if(process.env.NODE_ENV != 'production'){
    require('dotenv').config();
};

const app = require('./server');
require('./database');

app.listen(process.env.PORT || 3001,()=>{
    console.log('Servidor Corriendo')
});
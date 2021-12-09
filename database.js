const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology:true});

const connection = mongoose.connection;
connection.on('error', () =>{
  console.log('Error connection to database');
});

connection.once('open', () =>{
  console.log('Connectado a la base de datos Mongodb Atlas...');
});

/*if(process.env.NODE_ENV != 'production'){
    require('dotenv').config();
};

const uri = process.env.DB_URI;
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

async function conectar(){
    try {
        await mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology:true});
    } catch (error) {
        console.log(error);
    }
}
conectar();
let db = mongoose.connection;

db.once('open', ()=>{
    console.log('Conectado a Mongo Atlas')
})*/

module.exports = mongoose;
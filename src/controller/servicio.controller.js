const servicioCtrl = {};
const Service = require('../model/servicio.model');

servicioCtrl.getServicios = async (req,res)=>{
    try {
    const servicios = await Service.find({});
    res.status(200).json(servicios); 
    } catch (error) {
        console.log(error);
        res.status(400).send('Ocurrió un error en la operación')
    }
}; 

servicioCtrl.getServicio = async (req,res)=>{
    try {
    const servicios = await Service.findOne({codigo:req.params.codigo});
    res.status(200).json(servicios); 
    } catch (error) {
        console.log(error);
        res.status(400).send('Ocurrió un error en la operación')
    }
}; 

servicioCtrl.createServicio = async (req,res)=>{
    try {
        const {
        codigo,
        tipo_automotor,
        tipo_procedimiento,
        precio,
        duracion,
        } = req.body;
        let _servicio = new Service({codigo,tipo_automotor,tipo_procedimiento,precio,duracion});
        await _servicio.save();        
        res.status(201).send('Creado satisfactoriamente el servicio');
    } catch (error) {
        console.log(error);
        res.status(400).send('Ocurrió un error en la operación')
    }
}; 



servicioCtrl.editServicio = async (req,res)=>{
    try {
        const {
        codigo,
        tipo_automotor,
        tipo_procedimiento,
        precio,
        duracion,
        } = req.body;        
        await Service.updateOne({codigo:req.params.codigo},{codigo,tipo_automotor,tipo_procedimiento,precio,duracion});        
        res.status(201).send('Actualizado satisfactoriamente el servicio');
    } catch (error) {
        console.log(error);
        res.status(400).send('Ocurrió un error en la operación')
    }
}; 

servicioCtrl.deleteServicio = async (req,res)=>{
    try {
        await Service.deleteOne({codigo:req.params.codigo});
        res.status(200).send('Servicio eliminado correctamente');
    } catch (error) {
    console.log(error)
    res.status(400).send('Ocurrió un error en la operación')
    }
    };
    
module.exports = servicioCtrl;
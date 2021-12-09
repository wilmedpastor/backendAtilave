const {Router} = require('express');
const router = Router();

const { getServicios,getServicio, createServicio, editServicio, deleteServicio} = require('../controller/servicio.controller');

router.get('/servicios', getServicios);
router.get('/servicio/:codigo', getServicio);
router.post('/servicio', createServicio);
router.put('/servicio/:codigo', editServicio);
router.delete('/servicio/:codigo', deleteServicio);

module.exports = router;
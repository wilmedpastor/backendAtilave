const {Router} = require('express');
const router = Router();
const auth = require('../auth/auth');

const {token,getPersonas,getPersona,createPersona,editPersona,deletePersona} = require('../controller/persona.controller');

router.get('/personas', getPersonas);
router.get('/persona/:num_documento', auth, getPersona);
router.post('/persona', createPersona);
router.post('/persona/token', token);
router.put('/persona/:num_documento', auth, editPersona);
router.delete('/persona/:num_documento', auth, deletePersona);

module.exports = router;
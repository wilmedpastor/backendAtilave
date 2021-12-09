const {Router} = require('express');
const router = Router();

const {main} = require('../controller/mainController');

router.get('/', main);

module.exports = router;
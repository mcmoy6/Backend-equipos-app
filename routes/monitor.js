/*
    Rutas de Monitores /Monitor
    localhost:8000/api/monitor
*/

const { Router } = require('express');
// const { check } = require('express-validator');
// const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwtoken');

const { registrarMonitor, obtenerMonitores, obtenerMonitor } = require('../controllers/monitor.controller');

const router = Router();

// Pone la validacion del JWT antes de todas las peticiones para no ponerla en cada una
router.use( validarJWT );

router.post('/new', registrarMonitor );
router.get('/', obtenerMonitores );
router.get('/:id', obtenerMonitor );

module.exports = router;
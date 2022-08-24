/*
    Rutas de Movimientos /Movimiento
    localhost:8000/api/movimiento
*/

const { Router } = require('express');
// const { check } = require('express-validator');
// const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwtoken');

const { registrarMovimiento, obtenerMovimientos, obtenerMovimiento } = require('../controllers/movimiento.controller');

const router = Router();

// Pone la validacion del JWT antes de todas las peticiones para no ponerla en cada una
router.use( validarJWT );

router.post('/new', registrarMovimiento );

router.get('/', obtenerMovimientos );

router.get('/:id', obtenerMovimiento );

module.exports = router;

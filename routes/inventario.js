/*
    Rutas de Inventarios /inventario
    localhost:8000/api/inventario
*/

const { Router } = require('express');
// const { check } = require('express-validator');
// const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwtoken');

const { obtenerInventario, obtenerSingleEq } = require('../controllers/inventario.controller');

const router = Router();

// Pone la validacion del JWT antes de todas las peticiones para no ponerla en cada una
router.use( validarJWT );

router.get('/', obtenerInventario );
router.get('/:id', obtenerSingleEq );

module.exports = router;


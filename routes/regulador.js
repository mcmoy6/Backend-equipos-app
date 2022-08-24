/*
    Rutas de Reguladores /Regulador
    localhost:8000/api/Regulador
*/

const { Router } = require('express');
// const { check } = require('express-validator');
// const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwtoken');

const { registrarRegulador, obtenerReguladores, obtenerRegulador } = require('../controllers/regulador.controller');

const router = Router();

// Pone la validacion del JWT antes de todas las peticiones para no ponerla en cada una
router.use( validarJWT );

router.post('/new', registrarRegulador );
router.get('/', obtenerReguladores );
router.get('/:id', obtenerRegulador );

module.exports = router;
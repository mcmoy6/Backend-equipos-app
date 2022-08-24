/*
    Rutas de Sitios /Sitio
    localhost:8000/api/sitio
*/

const { Router } = require('express');
// const { check } = require('express-validator');
// const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwtoken');

const { registrarSitio, obtenerDatosSitios, obtenerDatosSitio } = require('../controllers/sitio.controller');

const router = Router();

// Pone la validacion del JWT antes de todas las peticiones para no ponerla en cada una
router.use( validarJWT );

router.post('/new', registrarSitio );

router.get('/', obtenerDatosSitios );

router.get('/:id', obtenerDatosSitio );

module.exports = router;
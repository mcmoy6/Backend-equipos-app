/*
    Rutas de Sitios /Role
    localhost:8000/api/role
*/

const { Router } = require('express');
// const { check } = require('express-validator');
// const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwtoken');

const { registrarRole } = require('../controllers/role.controller');

const router = Router();

// Pone la validacion del JWT antes de todas las peticiones para no ponerla en cada una
router.use( validarJWT );

router.post('/new', registrarRole );

// router.get('/', obtenerDatosSitios );

// router.get('/:id', obtenerDatosSitio );

module.exports = router;
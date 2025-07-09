/*
    Rutas de Usuarios 
    localhost:8000/api/
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwtoken');

const { obtenerArticulosServ, registrarArticuloServicio } = require('../controllers/artservicios.controlloer');

const router = Router();

// Pone la validacion del JWT antes de todas las peticiones para no ponerla en cada una
router.use( validarJWT );

router.post('/new', registrarArticuloServicio );

router.get('/', obtenerArticulosServ );

module.exports = router;
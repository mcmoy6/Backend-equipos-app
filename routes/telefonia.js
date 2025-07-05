/*
    Rutas de Empleados /Telefonia
    localhost:8000/api/telefonia
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwtoken');

const { registrarTelefono, obtenerTelefonos, actualizarTelefono } = require('../controllers/telefonia.controller');



const router = Router();

// Pone la validacion del JWT antes de todas las peticiones para no ponerla en cada una
router.use( validarJWT );


router.post('/new', registrarTelefono);

router.get('/', obtenerTelefonos);

router.put('/:id', actualizarTelefono);


module.exports = router;
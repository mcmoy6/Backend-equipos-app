/*
    Rutas de Empleados /Empleado
    localhost:8000/api/empleado
*/

const { Router } = require('express');
// const { check } = require('express-validator');
// const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwtoken');

const { registrarEmpleado, obtenerDatosEmpleados, obtenerDatosEmpleado } = require('../controllers/empleado.controller');

const router = Router();

// Pone la validacion del JWT antes de todas las peticiones para no ponerla en cada una
router.use( validarJWT );

router.post('/new', registrarEmpleado );

router.get('/', obtenerDatosEmpleados );

router.get('/:id', obtenerDatosEmpleado );

module.exports = router;


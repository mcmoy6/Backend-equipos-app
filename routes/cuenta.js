/*
    Rutas de Usuarios /Cuenta
    localhost:8000/api/cuenta
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwtoken');

const { registrarCuenta, obtenerDatosCuentas, obtenerDatosCuenta, actualizarDatosCuenta, eliminarDatosCuenta } = require('../controllers/cuenta.controller');


const router = Router();

router.use( validarJWT );


router.post(
    '/new', 
    [ // Middlewares
        check('tipoCuenta', 'Que tipo de cuenta solicita?').not().isEmpty(),
        check('nombre', 'El nombre es obligatorio.').not().isEmpty(),
        check('primerApellido', 'El apellido es obligatorio').not().isEmpty(),
        check('segundoApellido', 'El segundo apellido es obligatorio').not().isEmpty(),
        check('noEmpleado', 'El # de empleado es obligatorio').not().isEmpty(),
        check('denomPuesto', 'Por favor ingresar el puesto').not().isEmpty(),
        check('denomArea', 'Por favor ingresar el área').not().isEmpty(),
        check('ip', 'Ingresar la IP del equipo').not().isEmpty(),
        check('host', 'Ingresar el Host').not().isEmpty(),
        check('justificacion', 'Se requiere una justificación').not().isEmpty(),
       
        validarCampos
    ],
    registrarCuenta 
);

router.get('/', obtenerDatosCuentas );

router.get('/:id', obtenerDatosCuenta );

router.put('/:id', actualizarDatosCuenta );

router.delete('/:id', eliminarDatosCuenta );



module.exports = router;
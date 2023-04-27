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
        check('nombre', 'El nombre para la cuenta es obligatorio').not().isEmpty(),
        check('primerApellido', 'El apellido para la cuenta es obligatorio').not().isEmpty(),
        check('segundoApellido', 'El segundo apellido para la cuenta es obligatorio').not().isEmpty(),
       
        validarCampos
    ],
    registrarCuenta 
);

router.get('/', obtenerDatosCuentas );

router.get('/:id', obtenerDatosCuenta );

router.put('/:id', actualizarDatosCuenta );

router.delete('/:id', eliminarDatosCuenta );



module.exports = router;
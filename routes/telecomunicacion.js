/*
    Rutas de Usuarios /telecomunicacion
    localhost:8000/api/telecomunicacion
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwtoken');

const { registrarEqTelecom, obtenerDatosEqTelecom } = require('../controllers/telecomunicacion.controller');

const router = Router();

router.use( validarJWT );

router.post(
    '/new', 
    [ // Middlewares
        check('tipoDispositivo', 'Que tipo de dispositivo es?').not().isEmpty(),
        check('marca', 'Que marca es el dispositivo?').not().isEmpty(),
        check('modelo', 'Ingresar el modelo del dispositivo.').not().isEmpty(),
        check('serie', 'Ingresar la serie del dispositivo.').not().isEmpty(),
        check('estatusOperativo', 'Ingresar la serie del dispositivo.').not().isEmpty(),
        check('rack', 'Ingresar la serie del dispositivo.').not().isEmpty(),
        check('ubicacion', 'Ingresar la serie del dispositivo.').not().isEmpty(),
        check('idSitio', 'Ingresar la serie del dispositivo.').not().isEmpty(),

        
        validarCampos
    ],

    registrarEqTelecom 

);

router.get('/', obtenerDatosEqTelecom);

module.exports = router;

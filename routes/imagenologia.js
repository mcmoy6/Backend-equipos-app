/*
    Rutas de Equipos de Imagenologia /Imagenologia
    localhost:8000/api/imagenologia
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwtoken');

const { registrarEqImagenologia, obtenerDatosEqImagenologia } = require('../controllers/imagenologia.controller');

const router = Router();

router.use( validarJWT );


router.post(
    '/new', 
    [ // Middlewares
        check('descripcion', 'Ingrese descripción del equipo.').not().isEmpty(),
        check('marca', 'Que marca es el equipo?').not().isEmpty(),
        check('modelo', 'Ingresar el modelo del equipo.').not().isEmpty(),
        check('serie', 'Ingresar la serie del equipo.').not().isEmpty(),
        check('ubicacion', 'Dónde se ubica el equipo?').not().isEmpty(),
        check('cantidad', 'Ingresar la cantidad.').not().isEmpty(),
               
        validarCampos
    ],

    registrarEqImagenologia 
);

router.get('/', obtenerDatosEqImagenologia );

module.exports = router;
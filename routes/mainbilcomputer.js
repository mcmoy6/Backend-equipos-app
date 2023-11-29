/*
    Rutas de Usuarios /mainbilcomputer
    localhost:8000/api/mainbilcomputer
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwtoken');

const { registrarEquipo, obtenerEquipos, countEquipos, obtenerEquipo, actualizarEquipo, eliminarEquipo } = require('../controllers/mainbilcomputer.controller');

const router = Router();

// Pone la validacion del JWT antes de todas las peticiones para no ponerla en cada una
router.use( validarJWT );

router.post(
    '/new', 
    [
        check('sitio', 'Ingrese el ID del Sitio').not().isEmpty(),
        // check('numEmpleado', 'Ingresar el numero del empleado').not().isEmpty(),
        check('area', 'El área de empleado es obligatoria').not().isEmpty(),
        check('serieCpu', 'Ingrese la serie el CPU').not().isEmpty(),
        check('serieMonitor', 'La serie del Monitor es obligatoria').not().isEmpty(),
        check('serieNobreak', 'La serie del Nobreak es obligatoria').not().isEmpty(),
        check('ip', 'Capture la IP del equipo.').not().isEmpty(),
        check('cuenta', 'Que cuenta tiene el equipo?').not().isEmpty(),
        check('serieCandado', 'La serie del candado es obligatoria').not().isEmpty(),
        check('aplicativoInst', 'Especifique si trabaja con algún aplicativo institucional').not().isEmpty(),
        validarCampos
    ],
    registrarEquipo );

router.get('/', obtenerEquipos );

router.get('/count', countEquipos );

router.get('/:id', obtenerEquipo );

router.put('/:id', actualizarEquipo );

router.delete('/:id', eliminarEquipo);

module.exports = router;
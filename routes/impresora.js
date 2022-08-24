/*
    Rutas de Impresoras /Impresora
    localhost:8000/api/Impresora
*/

const { Router } = require('express');
// const { check } = require('express-validator');
// const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwtoken');

const { registrarImpresora, obtenerImpresoras, obtenerImpresora, actualizarImpresora, eliminarImpresora } = require('../controllers/impresora.controller');

const router = Router();

// Pone la validacion del JWT antes de todas las peticiones para no ponerla en cada una
router.use( validarJWT );

router.post('/new', registrarImpresora );

router.get('/', obtenerImpresoras );

router.get('/:id', obtenerImpresora );

router.put('/:id', actualizarImpresora );

router.delete('/:id', eliminarImpresora );

module.exports = router;

/*
    Rutas de Reportes /Reporte
    localhost:8000/api/reporte
*/

const { Router } = require('express');
// const { check } = require('express-validator');
// const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwtoken');

const { registrarTicket, obtenerTickets, obtenerTicket, actualizarStatusTicket } = require('../controllers/ticket.controller');

const router = Router();

// Pone la validacion del JWT antes de todas las peticiones para no ponerla en cada una
router.use( validarJWT );

router.post('/new', registrarTicket );

router.get('/', obtenerTickets );

router.get('/:id', obtenerTicket );

router.put('/:id', actualizarStatusTicket );

module.exports = router;

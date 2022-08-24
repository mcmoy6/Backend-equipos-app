/*
    Rutas de Usuarios /Auth
    localhost:8000/api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { getUsuarios, getUsuario, crearUsuario, putUsuario, deleteUsuario, loginUsuario, revalidarToken } = require('../controllers/auth.controller');
const { validarJWT } = require('../middlewares/validar-jwtoken');

const router = Router();


router.get( '/users', getUsuarios );

router.get( '/users/:id', getUsuario );

router.put('/users/:id', putUsuario );

router.delete('/users/:id', deleteUsuario );

router.post(
    '/new', 
    [ // Middlewares
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es obligatorio y debe ser de minimo 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    crearUsuario 
);


router.post(
    '/',
    [
        check('email', 'El email es obligatorio y debe ser un email válido').isEmail(),
        check('password', 'El password es obligatorio y debe ser de minimo 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    loginUsuario
);

router.get('/renew', validarJWT, revalidarToken);

module.exports = router;

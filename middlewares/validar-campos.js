const { response } = require('express');
const { validationResult } = require('express-validator');

const validarCampos = ( req, res = response, next) => {

     // Manejo de errores por express-validator
     const errors = validationResult( req );

     if ( !errors.isEmpty() ) {
        //  return res.status(400).json({
        //      ok: false,
        //      errors: errors.mapped()
        //  });
        return res.status(400).json(errors);
     }

    next();

}

module.exports = {
    validarCampos
}
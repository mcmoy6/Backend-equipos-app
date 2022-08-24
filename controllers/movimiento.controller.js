const {response} = require('express');
const Movimiento = require('../models/movimiento.model');

const registrarMovimiento = async ( req, res = response ) => {

    const { body } = req;

    try {

        const movimiento = new Movimiento( body );

        await movimiento.save();

        res.json({
            ok: true,
            msg: 'Movimiento registrado correctamente.',
            movimientoData: movimiento
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error a la hora de guardar. Por favor, hable con el administrador'
        });
        
    }

}

const obtenerMovimientos = async ( req, res = response ) => {

    const movimientos = await Movimiento.findAll();

    res.json({
        ok: true,
        msg: 'Todos los movimientos aquí.',
        movimientos
    });

}

const obtenerMovimiento = async ( req, res = response ) => {

    const {id} = req.params;

    const movimiento = await Movimiento.findByPk(id);
    if ( !movimiento ) {
        return res.status(404).json({
            msg: 'No existen resultados que mostrar'
        });
    }

    res.json({
        ok: true,
        msg: 'Datos del movimiento.',
        movimiento
    });

}

module.exports = {
    registrarMovimiento,
    obtenerMovimientos,
    obtenerMovimiento
}
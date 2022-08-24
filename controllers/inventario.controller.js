const {response} = require('express');
const Inventario = require('../models/inventario.model');

const obtenerSingleEq = async ( req, res = response ) => {

    const {id} = req.params;

    const singleEq = await Inventario.findByPk(id);
    if ( !singleEq ) {
        return res.status(404).json({
            msg: 'No existen resultados que mostrar'
        });
    }

    res.json({
        ok: true,
        msg: 'Equipo seleccionado.',
        singleEq
    });

}

const obtenerInventario = async ( req, res = response ) => {

    const inventarioLast = await Inventario.findAll();

    res.json({
        ok: true,
        msg: 'El inventario aquí.',
        inventarioLast
    });

}

module.exports = {
    obtenerInventario,
    obtenerSingleEq
}
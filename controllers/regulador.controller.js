const {response} = require('express');
const Regulador = require('../models/regulador.model');

const registrarRegulador = async ( req, res = response ) => {

    const { body } = req;

    try {

        const regulador = new Regulador( body );

        await regulador.save();

        res.json({
            ok: true,
            msg: 'Datos del regulador registrados correctamente.',
            reguladorData: regulador
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error a la hora de guardar. Por favor, hable con el administrador'
        });
        
    }

}

const obtenerReguladores = async ( req, res = response ) => {

    const reguladores = await Regulador.findAll();

    res.json({
        ok: true,
        msg: 'Todas los impresoras aquí.',
        reguladores
    });

}

const obtenerRegulador = async ( req, res = response ) => {

    const {id} = req.params;

    const regulador = await Regulador.findByPk(id);
    if ( !regulador ) {
        return res.status(404).json({
            msg: 'No existen resultados que mostrar'
        });
    }

    res.json({
        ok: true,
        msg: 'Datos de la impresora.',
        regulador
    });

}

module.exports = {
    registrarRegulador,
    obtenerReguladores, 
    obtenerRegulador
}
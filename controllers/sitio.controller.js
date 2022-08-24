const {response} = require('express');
const Sitio = require('../models/sitio.model');

const registrarSitio = async ( req, res = response ) => {

    const { body } = req;

    try {

        const sitio = new Sitio( body );

        await sitio.save();

        res.json({
            ok: true,
            msg: 'Sitio registrado correctamente.',
            sitioData: sitio
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error a la hora de guardar. Por favor, hable con el administrador'
        });
        
    }

}

const obtenerDatosSitios = async ( req, res = response ) => {

    const sitios = await Sitio.findAll();

    res.json({
        ok: true,
        msg: 'He aqui los datos.',
        sitios
    });

}

const obtenerDatosSitio = async ( req, res = response ) => {

    const { id } = req.params;

    const sitio = await Sitio.findByPk(id);
    if ( !sitio ) {
        return res.status(404).json({
            msg: 'No existen resultados que mostrar'
        });
    }

    res.json({
        ok: true,
        msg: 'Datos del sitio seleccionado.',
        sitio
    });
}

module.exports = {
    registrarSitio,
    obtenerDatosSitios,
    obtenerDatosSitio
}
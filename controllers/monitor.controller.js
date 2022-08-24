const {response} = require('express');
const Monitor = require('../models/monitor.model');

const registrarMonitor = async ( req, res = response ) => {

    const { body } = req;

    try {

        const monitor = new Monitor( body );

        await monitor.save();

        res.json({
            ok: true,
            msg: 'Datos del monitor registrados correctamente.',
            reguladorData: monitor
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error a la hora de guardar. Por favor, hable con el administrador'
        });
        
    }

}

const obtenerMonitores = async ( req, res = response ) => {

    const monitores = await Monitor.findAll();

    res.json({
        ok: true,
        msg: 'Todos los monitores aquí.',
        monitores
    });

}

const obtenerMonitor = async ( req, res = response ) => {

    const {id} = req.params;

    const monitor = await Monitor.findByPk(id);
    if ( !monitor ) {
        return res.status(404).json({
            msg: 'No existen resultados que mostrar'
        });
    }

    res.json({
        ok: true,
        msg: 'Datos del monitor.',
        monitor
    });

}

module.exports = {
    registrarMonitor,
    obtenerMonitores, 
    obtenerMonitor
}
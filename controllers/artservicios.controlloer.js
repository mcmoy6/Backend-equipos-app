const {response} = require('express');
const Artservicio = require('../models/artservicios.model'); 


const registrarArticuloServicio = async ( req, res = response ) => {

    const { body } = req;

    try {

        const existArtServicio = await Artservicio.findOne({
            where: {
                codigoBarras: body.codigoBarras
            }
        });

        if ( existArtServicio ) {
            return res.status(400).json({
                msg: 'Ya se encuentra registrada la serie ' + body.codigoBarras
            });
        }

        const articuloServicio = new Artservicio( body );

        await articuloServicio.save();

        res.json({
            ok: true,
            msg: 'Equipo registrado.',
            artServ: articuloServicio
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error a la hora de guardar. Por favor, hable con el administrador'
        });
        
    }
}

const obtenerArticulosServ = async ( req, res = response ) => {

    const asrtservicios = await Artservicio.findAll();

    res.json({
        ok: true,
        msg: 'Todos los artículos y servicios aquí.',
        asrtservicios
    });

}

module.exports = {
    obtenerArticulosServ, 
    registrarArticuloServicio
}



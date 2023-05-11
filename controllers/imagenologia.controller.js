const {response} = require('express');
const Imagenologia = require('../models/imagenologia.model');


const registrarEqImagenologia = async ( req, res = response) => {

    const { body } = req;

    try {

         // Validamos si ya existe una serie de cpu igual en la BD
         const existSerieEqu = await Imagenologia.findOne({
            where: {
                serie: body.serie
            }
        });

        if ( existSerieEqu ) {
            return res.status(400).json({
                msg: 'Ya se encuentra registrada la serie: ' + body.serie
            });
        }

        const equipoImagenologia = new Imagenologia( body );
        
        await equipoImagenologia.save();

        res.json({
            ok: true,
            msg: 'Datos del equipo registrados.',
            equipoImagData: equipoImagenologia
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error a la hora de guardad. Por favor hable con el administrador.'
        });
    }
}

const obtenerDatosEqImagenologia = async ( req, res = response ) => {

    const equiposImagen = await Imagenologia.findAll();

    res.json({
        ok: true,
        msg: 'He aquí los datos de todas los equipos de imagenología.',
        equiposImagen
    });

}

module.exports = {
    registrarEqImagenologia,
    obtenerDatosEqImagenologia
}
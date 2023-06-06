const {response} = require('express');
const Telecomunicacion = require('../models/telecom.model');



const registrarEqTelecom = async ( req, res = response ) => {

    const { body } = req;
    
    try {

        // Validamos si ya existe una serie de cpu igual en la BD
        const existSerie = await Telecomunicacion.findOne({
           where: {
               serie: body.serie
           }
       });

       if ( existSerie ) {
           return res.status(400).json({
               msg: 'Ya se encuentra registrada la serie: ' + body.serie
           });
       }

       const equipoTelecom = new Telecomunicacion( body );
       
       await equipoTelecom.save();

       res.json({
           ok: true,
           msg: 'Datos de la cuenta registrados.',
           eqTelecom: equipoTelecom
       });
       
   } catch (error) {
       console.log(error);
       res.status(500).json({
           msg: 'Error a la hora de guardad. Por favor hable con el administrador.'
       });
   }

}

const obtenerDatosEqTelecom = async ( req, res = response ) => {

    const equiposTelecom = await Telecomunicacion.findAll();

    res.json({
        ok: true,
        msg: 'He aquí los datos de los Equipos de Telecomunicación.',
        equiposTelecom
    });

}

module.exports = {
    registrarEqTelecom,
    obtenerDatosEqTelecom
}
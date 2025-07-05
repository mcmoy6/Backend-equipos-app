const {response} = require('express');
const Telefono = require('../models/telefonia.model');



const registrarTelefono = async ( req, res = response ) => {

    const { body } = req;
    
    try {

        const existSerie = await Telefono.findOne({
            where: {
                serie: body.serie
            }
        });

        if ( existSerie ) {
            return res.status(400).json({
                validateError: true,
                msg: 'Ya se encuentra registrada la serie ' + body.serie
            });
        }
        
        const telefono = new Telefono( body );
    
        await telefono.save();
    
        res.status(200).json({
            ok: true,
            msg: 'Telefono registrado correctamente',
            telRegistrado: telefono
        });

    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error a la hora de guardar. Por favor, hable con el administrador'
        });
        
    }


}

const obtenerTelefonos = async ( req, res = response ) => {

    const telefonos = await Telefono.findAll(); 

    res.status(200).json({
        ok: true,
        msg: 'Todos los telefonos aquí.',
        telefonos
    });
}

const actualizarTelefono = async ( req, res = response ) => {

    const {id} = req.params;
    const {body} = req;

    const telefono = await Telefono.findByPk(id);

    
    try {
        
        if ( !telefono ) {
            res.status(400).json({
                ok: false,
                msg: 'No existe el telefono que intentas modificar.'
            });
        }
    
        await telefono.update( body );
        
        res.status(200).json({
            ok: true,
            msg: 'Los datos del telefono se actualizaron correctamente.'
        });

    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Error a la hora de guardar. Por favor, hable con el administrador'
        });
        
    }
}

module.exports = {
    registrarTelefono,
    obtenerTelefonos, 
    actualizarTelefono
}


const {response} = require('express');
const Impresora = require('../models/impresora.model');

const registrarImpresora = async ( req, res = response ) => {

    const { body } = req;

    try {

        const existSeriePrinter = await Impresora.findOne({
            where: {
                serie: body.serie
            }
        });

        if ( existSeriePrinter ) {
            return res.status(400).json({
                msg: 'Ya se encuentra registrada la serie: ' + body.serie
            });
        }

        const impresora = new Impresora( body );

        await impresora.save();

        res.json({
            ok: true,
            msg: 'Impresora registrada correctamente.',
            impresoraData: impresora
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error a la hora de guardar. Por favor, hable con el administrador'
        });
        
    }

}

const obtenerImpresoras = async ( req, res = response ) => {

    const impresoras = await Impresora.findAll();

    res.json({
        ok: true,
        msg: 'Todas los impresoras aquí.',
        impresoras
    });

}

const obtenerImpresora = async ( req, res = response ) => {

    const {id} = req.params;

    const impresora = await Impresora.findByPk(id);
    if ( !impresora ) {
        return res.status(404).json({
            msg: 'No existen resultados que mostrar'
        });
    }

    res.json({
        ok: true,
        msg: 'Datos de la impresora.',
        impresora
    });

}

const actualizarImpresora = async ( req, res = response ) => {

    const {id} = req.params;
    const {body} = req;

    try {

        // Verificamos si en BD existe un equipo con ese ID
        const impresora = await Impresora.findByPk(id);

        if ( !impresora ) {
            return res.status(404).json({
                msg: 'No existe id para la impresora que intentas actualizar'
            });
        }

               
        // await ticket.update( {estado: body.estado} );
        await impresora.update( body );
        res.json({
            ok: true,
            msg: 'Impresora actualizada satisfactoriamente.'
        });

        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Error a la hora de guardar. Por favor, hable con el administrador'
        });
        
    }

}

const eliminarImpresora = async ( req, res = response ) => {

    const {id} = req.params;

     // Verificamos si en BD existe un equipo con ese ID
     const impresora = await Impresora.findByPk(id);
     if ( !impresora ) {
         return res.status(404).json({
             msg: 'No existe el equipo que intentas eliminar'
         });
     }

     // Eliminación fisica
    //  await impresora.destroy();

    // Eliminacion Lógica. Recomendable para mantener la integridad de los datos
    await impresora.update({ estatus: 0 });

     res.json({
         ok: true,
         msg: 'Equipo eliminado.',
         impresora});
     
}

module.exports = {
    registrarImpresora,
    obtenerImpresoras,
    obtenerImpresora,
    actualizarImpresora,
    eliminarImpresora
}
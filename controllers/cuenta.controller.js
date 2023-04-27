const {response} = require('express');
const Cuenta = require('../models/cuenta.model');


const registrarCuenta = async ( req, res = response) => {

    const { body } = req;

    try {

         // Validamos si ya existe una serie de cpu igual en la BD
         const existNoEmpleado = await Cuenta.findOne({
            where: {
                noEmpleado: body.noEmpleado
            }
        });

        if ( existNoEmpleado ) {
            return res.status(400).json({
                msg: 'Ya se encuentra registrado el numero de empleado: ' + body.noEmpleado
            });
        }

        const cuenta = new Cuenta( body );
        
        await cuenta.save();

        res.json({
            ok: true,
            msg: 'Datos de la cuenta registrados.',
            cuentadom: cuenta
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error a la hora de guardad. Por favor hable con el administrador.'
        });
    }
}

const obtenerDatosCuentas = async ( req, res = response ) => {

    const cuentas = await Cuenta.findAll();

    res.json({
        ok: true,
        msg: 'He aquí los datos de todas las cuentas.',
        cuentas
    });

}

const obtenerDatosCuenta = async ( req, res = response ) => {

    const { id } = req.params;

    const cuenta = await Cuenta.findByPk(id);
    if ( !cuenta ) {
        return res.status(404).json({
            msg: 'No existen resultados que mostrar'
        });
    }

    res.json({
        ok: true,
        msg: 'Datos de la cuenta encontrados.',
        cuenta
    });

}

const actualizarDatosCuenta = async ( req, res = response) => {

    const {id} = req.params;
    const {body} = req;

    try {

        const cuenta = await Cuenta.findByPk(id);
        if ( !cuenta ) {
            return res.status(404).json({
                msg: 'No existe el id de la cuenta que intentas modificar.'
            });
        }
    
        await cuenta.update( body );
        res.json({
            ok: true,
            msg: 'Datos modificados satisfactoriamente.'
        });
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Error a la hora de guardar. Por favor, hable con el administrador'
        });
        
    }

}

const eliminarDatosCuenta = async ( req, res = response ) => {

    const {id} = req.params;

    // Verificamos si en BD existe un equipo con ese ID
    const cuenta = await Cuenta.findByPk(id);
    if ( !cuenta ) {
        return res.status(404).json({
            msg: 'No existe la cuenta que intentas modificar'
        });
    }

     // Eliminación fisica
     await cuenta.destroy();

    // Eliminacion Lógica. Recomendable para mantener la integridad de los datos
    // await computer.update({ estado: false });

     res.json({
         ok: true,
         msg: 'Equipo eliminado.',
         cuenta
        });

}

module.exports = {
    registrarCuenta,
    obtenerDatosCuentas,
    obtenerDatosCuenta,
    actualizarDatosCuenta,
    eliminarDatosCuenta
}
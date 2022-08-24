const {response} = require('express');
const Empleado = require('../models/empleado.model');



const registrarEmpleado = async ( req, res = response ) => {

    const { body } = req;

    try {

        const empleado = new Empleado( body );

        await empleado.save();

        res.json({
            ok: true,
            msg: 'Empelado registrado.',
            equipo: empleado
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error a la hora de guardar. Por favor, hable con el administrador'
        });
        
    }

}

const obtenerDatosEmpleados = async ( req, res = response ) => {

    const empleados = await Empleado.findAll();

    res.json({
        ok: true,
        msg: 'He aqui los datos.',
        empleados
    });

}

const obtenerDatosEmpleado = async ( req, res = response ) => {

    const { id } = req.params;

    const empleado = await Empleado.findByPk(id);
    if ( !empleado ) {
        return res.status(404).json({
            msg: 'No existen resultados que mostrar'
        });
    }

    res.json({
        ok: true,
        msg: 'Datos del epleado seleccionado.',
        empleado
    });
}

module.exports = {
    registrarEmpleado,
    obtenerDatosEmpleados,
    obtenerDatosEmpleado
}
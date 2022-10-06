const {response} = require('express');
const Role = require('../models/role.model');

const registrarRole = async ( req, res = response ) => {

    const { body } = req;

    try {

        const role = new Role( body );

        await role.save();

        res.json({
            ok: true,
            msg: 'Role registrado correctamente.',
            roleData: role
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error a la hora de guardar. Por favor, hable con el administrador'
        });
        
    }

}


module.exports = {
    registrarRole
}
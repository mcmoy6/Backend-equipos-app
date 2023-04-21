const {response} = require('express');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwtoken');

const Usuario = require('../models/usuario.model');


const getUsuarios = async (req, res = response) => {

    const usuarios = await Usuario.findAll();
    
    res.json(usuarios);
    // res.json({
    //     msg: 'Hola'
    // });
    
}

const getUsuario = async (req, res = response) => {

    const {id} = req.params;

    const usuario = await Usuario.findByPk(id);

     res.json(usuario);
    // res.json({
    //     msg: 'Hola'
    // });
    
}

const crearUsuario = async (req, res = response) => {

    const {body} = req;

    try {

        // Verificamos si en BD ya existe un email igual a proveniente del Body
        const existeEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        });

        if ( existeEmail ) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el email: ' + body.email
            });
        }
        
        const usuario = new Usuario(body);

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( body.password, salt );

        // Guardamos los datos del usuario en la BD
        await usuario.save();

        // Generar token
        const token = await generarJWT( usuario.id, usuario.nombre, usuario.id_sitio );


        // Una vez registrado el usuario, hacemos la consulta para asi poder obtener el id y el nombre 
        // para cambiar el status del login en el store
        const { email } = req.body
        const usuarioSave = await Usuario.findOne({
            where: {
                email
            }
        });
        
        const { id, nombre, id_sitio } = usuarioSave;

        res.status(201).json({
            ok: true,
            msg: 'usuario registrado',
            token,
            id,
            nombre,
            id_sitio
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error a la hora de guardar. Por favor, hable con el administradora'
        });
        
    }

   
} 

const loginUsuario = async (req, res = response ) => {

    const {email, password} = req.body;

    try {

         // Verificamos si en BD ya existe un email igual a proveniente del Body
         const usuario = await Usuario.findOne({
            where: {
                email
            }
        });

        const { nombre, id, id_sitio, role } = usuario

        if ( !usuario ) {
            return res.status(400).json({
                msg: 'El usuario no existe'
            });
        }

        // Validamos la contraseña
        const validPassword = bcrypt.compareSync( password, usuario.password );

        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            });
        }

        // Si todo sale bien, generamos el JWT
        const token = await generarJWT( usuario.id, usuario.nombre, usuario.id_sitio, usuario.role );

         res.json({
                ok: true,
                msg: 'ok',
                token,
                id,
                nombre,
                id_sitio, 
                role
            });

        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Por favor hable con el administrador.'
        });
        
    }
   
}

const revalidarToken = async (req, res = response) => {

    const uid = req.uid;
    const name = req.name;
    const idSitio = req.idSitio
    const role = req.role

    // console.log(req);
    

    // Se genera el nuevo token
    const token = await generarJWT( uid, name, idSitio, role );

    res.json({
        ok: true,
        msg: 'Renew token ok.',
        token,
        uid,
        name,
        idSitio, 
        role
    });
}

const putUsuario = async (req, res = response) => {

    const {id} = req.params;
    const {body} = req;

    try {

        // Verificamos si en BD existe un usuario con ese ID
        const usuario = await Usuario.findByPk(id);
        if ( !usuario ) {
            return res.status(404).json({
                msg: 'No existe el usuario que intentas modificar'
            });
        }

         // Verificamos si en BD ya existe un email igual a proveniente del Body
         const existeEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        });

        if ( existeEmail ) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el email: ' + body.email
            });
        }
        
        await usuario.update(body);
        res.json(usuario);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error a la hora de guardar. Por favor, hable con el administrador'
        });
        
    }

   
} 

const deleteUsuario = async (req, res = response) => {

    const {id} = req.params;

     // Verificamos si en BD existe un usuario con ese ID
     const usuario = await Usuario.findByPk(id);
     if ( !usuario ) {
         return res.status(404).json({
             msg: 'No existe el usuario que intentas modificar'
         });
     }

     // Eliminación fisica
    //  await usuario.destroy();

    // Eliminacion Lógica. Recomendable para mantener la integridad de los datos
    await usuario.update({ estado: false });

     res.json(usuario);
}


module.exports = {
    getUsuarios,
    getUsuario,
    crearUsuario,
    putUsuario,
    deleteUsuario,
    loginUsuario,
    revalidarToken
}
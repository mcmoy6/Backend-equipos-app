const {response} = require('express');
const Computer = require('../models/computer.model');
// const bcrypt = require('bcryptjs');
// const { generarJWT } = require('../helpers/jwtoken');



const registrarEquipo = async ( req, res = response ) => {

    const { body } = req;

    try {

        // Validamos si ya existe una serie de cpu igual en la BD
        const existSerieCpu = await Computer.findOne({
            where: {
                serieCpu: body.serieCpu
            }
        });

        if ( existSerieCpu ) {
            return res.status(400).json({
                msg: 'Ya se encuentra registrada la serie ' + body.serieCpu
            });
        }

        // Validamos si ya existe una serie de monitor igual en la BD
        const existSerieMonitor = await Computer.findOne({
            where: {
                serieMonitor: body.serieMonitor
            }
        });

        if ( existSerieMonitor ) {
            return res.status(400).json({
                msg: 'Ya se encuentra registrada la serie ' + body.serieMonitor
            });
        }

        // Validamos si ya existe una serie de NoBreak igual en la BD
        const existSerieNobreak = await Computer.findOne({
            where: {
                serieNobreak: body.serieNobreak
            }
        });

        if ( existSerieNobreak ) {
            return res.status(400).json({
                msg: 'Ya se encuentra registrada la serie ' + body.serieNobreak
            });
        }

        // Validamos si ya existe una ip igual
        const existIp = await Computer.findOne({
            where: {
                ip:body.ip
            }
        });

        if ( existIp ) {
            return res.status(400).json({
                msg: 'Ya se encuantra asignada la ip ' + body.ip
            });
        }

        // Validar serie del candado
        const existSerieCandado = await Computer.findOne({
            where: {
                serieCandado:body.serieCandado
            }
        });

        if ( existSerieCandado ) {
            return res.status(400).json({
                msg: 'Ya se encuentra registrada la serie del candado ' + body.serieCandado
            });
            
        }

        const computer = new Computer( body );

        await computer.save();

        res.json({
            ok: true,
            msg: 'Equipo registrado.',
            equipo: computer
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error a la hora de guardar. Por favor, hable con el administrador'
        });
        
    }

}

const obtenerEquipos = async ( req, res = response ) => {

    const computers = await Computer.findAll();

    res.json({
        ok: true,
        msg: 'Todos los equipos aquí.',
        computers
    });

}

const countEquipos = async ( req, res = response) => {

    const cantidadEquipos = await Computer.count();

    res.json({
        ok: true,
        msg: 'He aquí la cantidad de esquipos de computo.',
        cantidadEquipos
    });
}

const obtenerEquipo = async ( req, res = response ) => {

    const {id} = req.params;

    const computer = await Computer.findByPk(id);
    if ( !computer ) {
        return res.status(404).json({
            msg: 'No existen resultados que mostrar'
        });
    }

    res.json({
        ok: true,
        msg: 'Equipo seleccionado.',
        computer
    });

}

const actualizarEquipo = async ( req, res = response ) => {

    const {id} = req.params;
    const {body} = req;

    try {

        // Verificamos si en BD existe un equipo con ese ID
        const computer = await Computer.findByPk(id);

        if ( !computer ) {
            return res.status(404).json({
                msg: 'No existe id para el equipo que intentas modificar'
            });
        }

        // Validamos si ya existe una serie de cpu igual en la BD
        // const existSerieCpu = await Computer.findOne({
        //     where: {
        //         serieCpu: body.serieCpu
        //     }
        // });

        // if ( existSerieCpu ) {
        //     return res.status(400).json({
        //         msg: 'Ya se encuentra registrada la serie ' + body.serieCpu
        //     });
        // }

        // // Validamos si ya existe una serie de monitor igual en la BD
        // const existSerieMonitor = await Computer.findOne({
        //     where: {
        //         serieMonitor: body.serieMonitor
        //     }
        // });

        // if ( existSerieMonitor ) {
        //     return res.status(400).json({
        //         msg: 'Ya se encuentra registrada la serie ' + body.serieMonitor
        //     });
        // }

        // // Validamos si ya existe una serie de NoBreak igual en la BD
        // const existSerieNobreak = await Computer.findOne({
        //     where: {
        //         serieNobreak: body.serieNobreak
        //     }
        // });

        // if ( existSerieNobreak ) {
        //     return res.status(400).json({
        //         msg: 'Ya se encuentra registrada la serie ' + body.serieNobreak
        //     });
        // }
        
        await computer.update( body );
        res.json({
            ok: true,
            msg: 'Equipo actualizado satisfactoriamente.'
        });

        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Error a la hora de guardar. Por favor, hable con el administrador'
        });
        
    }

}

const eliminarEquipo = async ( req, res = response ) => {

    const {id} = req.params;

     // Verificamos si en BD existe un equipo con ese ID
     const computer = await Computer.findByPk(id);
     if ( !computer ) {
         return res.status(404).json({
             msg: 'No existe el equipo que intentas modificar'
         });
     }

     // Eliminación fisica
     await computer.destroy();

    // Eliminacion Lógica. Recomendable para mantener la integridad de los datos
    // await computer.update({ estado: false });

     res.json({
         ok: true,
         msg: 'Equipo eliminado.',
         computer});
     
    // res.json({
    //     ok: true,
    //     msg: 'Equipo eliminado correctamente.'
    // });

}

module.exports = {
    registrarEquipo,
    obtenerEquipos,
    countEquipos,
    obtenerEquipo, 
    actualizarEquipo,
    eliminarEquipo
}
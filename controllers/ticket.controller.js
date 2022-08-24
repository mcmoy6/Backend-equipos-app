const {response} = require('express');
const Ticket = require('../models/ticket.model');

const registrarTicket = async ( req, res = response ) => {

    const { body } = req;

    try {

        const ticket = new Ticket( body );

        await ticket.save();

        res.json({
            ok: true,
            msg: 'Ticket registrado correctamente.',
            ticketData: ticket
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error a la hora de guardar. Por favor, hable con el administrador'
        });
        
    }

}

const obtenerTickets = async ( req, res = response ) => {

    const tickets = await Ticket.findAll();

    res.json({
        ok: true,
        msg: 'Todos los tickets aquí.',
        tickets
    });

}

const obtenerTicket = async ( req, res = response ) => {

    const {id} = req.params;

    const ticket = await Ticket.findByPk(id);
    if ( !ticket ) {
        return res.status(404).json({
            msg: 'No existen resultados que mostrar'
        });
    }

    res.json({
        ok: true,
        msg: 'Datos del ticket.',
        ticket
    });

}

const actualizarStatusTicket = async ( req, res = response ) => {

    const {id} = req.params;
    const {body} = req;

    try {

        // Verificamos si en BD existe un equipo con ese ID
        const ticket = await Ticket.findByPk(id);

        if ( !ticket ) {
            return res.status(404).json({
                msg: 'No existe id para el ticket que intentas modificar'
            });
        }

               
        // await ticket.update( {estado: body.estado} );
        await ticket.update( body );
        res.json({
            ok: true,
            msg: 'Ticket actualizado satisfactoriamente.'
        });

        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Error a la hora de guardar. Por favor, hable con el administrador'
        });
        
    }

}

module.exports = {
    registrarTicket,
    obtenerTickets,
    obtenerTicket, 
    actualizarStatusTicket
}
const express = require('express');
const dbConnection = require('./db/connection');
const cors = require('cors');
require('dotenv').config();


// Crear Servidor de Express
const app = express();

// Conexion al a Base de Datos
(async () => {
    try {
        await dbConnection.authenticate();
        console.log('Database Online!');
        
    } catch (error) {
        throw new Error(error);
    }
})();

// CORS
app.use(cors());



// Directorio publico
app.use( express.static('public') );

// Lectura y parseo del Body
app.use( express.json() );

// Rutas
app.use('/api/auth', require('./routes/auth') );
app.use('/api/computer', require('./routes/computer') );
app.use('/api/empleado', require('./routes/empleado') );
app.use('/api/impresora', require('./routes/impresora') );
app.use('/api/inventario', require('./routes/inventario') );
app.use('/api/monitor', require('./routes/monitor') );
app.use('/api/movimiento', require('./routes/movimiento') );
app.use('/api/regulador', require('./routes/regulador') );
app.use('/api/role', require('./routes/role') );
app.use('/api/sitio', require('./routes/sitio') );
app.use('/api/ticket', require('./routes/ticket') );

app.get('*', ( req, res ) => {
    res.sendFile( __dirname + '/public/index.html' );
});


// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${ process.env.PORT }`);
});
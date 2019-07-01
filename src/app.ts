import express from 'express';

// Inicializacion
const app = express();

// Configuraciones Globales
app.set('port', process.env.PORT || 3000);


// Rutas
app.get('/', (req,  res) => {    
    res.send('Bienvenido a la aplicación 3 ');
});


export default app;

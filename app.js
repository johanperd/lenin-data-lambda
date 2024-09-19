
const express = require('express');
const serverless = require('serverless-http');


const app = express();

const datos = [
    { id: 1, nombre: 'pedro' },
    { id: 2, nombre: 'juan' },
    { id: 3, nombre: 'maria' },
    { id: 4, nombre: 'karina' },
    { id: 5, nombre: 'julieta' },
];

app.get('/datos', (req, res) => {
    res.send(JSON.stringify(datos));
});

// Exporta el manejador para AWS Lambda
module.exports.handler = serverless(app);

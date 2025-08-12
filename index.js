//CJS Common JS const express = require ('express');  
import express from 'express'; // ESM Ecmascript modules

const app = express ();

// Routing 
app.get('/', (req, res) => {
    res.send('Hola mundo desde Express');
});

// Server o Port
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('Servidor Funcionando en el puerto...', port);
})
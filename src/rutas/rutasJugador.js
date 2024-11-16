const express = require('express');
const enrutador = express.Router();
const jugadorControlador = require('../controladores/jugadorControlador');

enrutador.post('/registrar', jugadorControlador.registarJugador);
enrutador.get('/obtener', jugadorControlador.obtenerJugadores);

module.exports = enrutador;

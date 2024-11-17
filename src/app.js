require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const jugadorRutas = require('./rutas/rutasJugador');
const nivelesRutas = require('./rutas/rutasNivel');
const jugadorNivelRutas = require('./rutas/rutasJugadorNivel');

const corsOpciones = {
    origin: 'http://localhost:3000',
    methods: ['GET','POST','PUT','DELETE'],
    allowedHeaders: ['Content-Type','Authorization'],

};

app.use(cors(corsOpciones));

app.use(express.json());

app.use('/api/jugador', jugadorRutas);
app.use('/api/nivel', nivelesRutas);
app.use('/api/jugadornivel', jugadorNivelRutas);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
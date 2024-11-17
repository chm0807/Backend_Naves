const { JugadorNivel } = require('../baseDatos/conexion');

const registrarPuntaje = async (req, res) =>{
    try {
        const puntaje = await JugadorNivel.create(req.body);
        res.status(201).json({mensaje: 'Puntaje registrado', resultado:null});
    } catch (error){
        res.status(500).json({mensaje: error.massage, resultado: null});
    }
};

const obtenerPuntajePorJugador = async (req, res) => {
    try {
        const puntajes = await JugadorNivel.finAll({
            where: {
                jugadorCedula: req.params.celuda
            }
        });

        if (!puntajes.length) {
            res.status(404).json({ mensaje: 'No hay puntajes para este jugador', resultado:null});
        }
        return res.status(200).json({mensaje: 'Lista de puntajes', resultado:puntajes});
    }catch (error) {
        res.status(500).json({mensaje: error.message, resultado: null});
    }
};

module.exports = {
    registrarPuntaje,
    obtenerPuntajePorJugador
}
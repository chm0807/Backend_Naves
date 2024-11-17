const { Nivel } = require('../baseDatos/conexion');

const crearNivel = async (req, res) => {
    try {
        const nivel = await Nivel.create(req.body);
        res.status(201).json({mensaje:'Nivel ' + nivel.nombre + 'fue creado', resultado:null});
    }catch(error){
        res.status(500).json({mensaje: error.massage, resultado:null});
    }
};

const obtenerNiveles = async (req, res) => {
    try {
        const niveles = await Nivel.findAll();
        res.status(200).json({mensaje: 'Lista de niveles', resultado: niveles});
    } catch (error){
        res.status(500).json({mensaje: error.message, resultado:null});
    }
};

module.exports = {
    crearNivel,
    obtenerNiveles
}
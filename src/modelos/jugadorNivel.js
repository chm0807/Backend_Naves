module.exports =(Sequelize, DataTypes) => {
    return Sequelize.define ('JugadorNivel', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        jugadorCedula: {
            type: DataTypes.STRING,
            references: {
                model: 'Jugador',
                key: 'Cedula'
            }
        },
        nivelId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Nivel',
                key: 'id'
            }
        },
        puntajeMaximo: {
            type: DataTypes.INTEGER
        }
    },{
        tableName: 'jugadornivel',
        timestamps: true,
    });
};
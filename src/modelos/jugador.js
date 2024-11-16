module.exports =(Sequelize, DataTypes) => {
    return Sequelize.define ('Jugador', {
        cedula: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: 'email'
        }
    },{
        tableName: 'jugador',
        timestamps: true,
    });
};
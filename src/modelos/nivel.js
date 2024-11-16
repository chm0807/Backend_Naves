module.exports =(Sequelize, DataTypes) => {
    return Sequelize.define ('Nivel', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        tableName: 'nivel',
        timestamps: true,
    });
};
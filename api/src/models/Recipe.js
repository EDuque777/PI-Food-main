const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false
    },

    resumen_plato: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    comida_saludable: {
      type: DataTypes.STRING,
      allowNull: false
    },

    paso_a_paso: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },
  {
    timestamps: false
  });
};

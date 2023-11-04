"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Promosi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Promosi.belongsTo(models.Event);
      Promosi.hasMany(models.Transaksi);
    }
  }
  Promosi.init(
    {
      kode_promo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cost_point: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "Promosi",
    }
  );
  return Promosi;
};

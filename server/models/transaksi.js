"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaksi.belongsTo(models.User);
      Transaksi.belongsTo(models.Event);
      Transaksi.hasOne(models.Tiket);
      Transaksi.belongsTo(models.Payment_Method);
      Transaksi.belongsTo(models.Promosi);
    }
  }
  Transaksi.init(
    {
      cust_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cust_email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cust_telp: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      total_bayar: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "Transaksi",
    }
  );
  return Transaksi;
};

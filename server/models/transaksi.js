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
      Transaksi.belongsTo(models.Promosi);
    }
  }
  Transaksi.init(
    {
      nama_lengkap: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telp: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      total_harga_tiket: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      biaya_layanan: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      diskon: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      total_bayar: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      metode_pembayaran: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Transaksi",
    }
  );
  return Transaksi;
};

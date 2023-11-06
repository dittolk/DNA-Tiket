'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tiket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tiket.belongsTo(models.Event)
      Tiket.belongsTo(models.Transaksi)
      Tiket.belongsTo(models.User)
    }
  }
  Tiket.init({
    harga_tiket: DataTypes.INTEGER,
    kuota: DataTypes.INTEGER,
    tanggal_akhir: DataTypes.DATEONLY,
    jumlah_tiket: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Tiket',
  });
  return Tiket;
};
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Event.hasMany(models.Tiket);
      Event.hasMany(models.Transaksi);
      Event.hasMany(models.Promosi);
      Event.belongsTo(models.User);
    }
  }
  Event.init(
    {
      nama_event: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      format_event: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      topik_event: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      jenis_event: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deskripsi_event: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ketentuan_event: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      alamat: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      kota: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      penyelenggara: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tanggal_mulai: {
        type: DataTypes.DATEONLY, 
        allowNull: false, 
      },
      tanggal_berakhir: {
        type: DataTypes.DATEONLY, 
        allowNull: false, 
      },
      waktu_mulai: {
        type: DataTypes.TIME, 
        allowNull: false, 
      },
      waktu_berakhir: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      image_link: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Event",
    }
  );
  return Event;
};

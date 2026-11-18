const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_seasons', {
    season_id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    series_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'tb_series',
        key: 'content_id'
      },
      unique: "uq_tb_seasons_series_number"
    },
    season_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "uq_tb_seasons_series_number"
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_seasons',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_seasons_pkey",
        unique: true,
        fields: [
          { name: "season_id" },
        ]
      },
      {
        name: "uq_tb_seasons_series_number",
        unique: true,
        fields: [
          { name: "series_id" },
          { name: "season_number" },
        ]
      },
    ]
  });
};

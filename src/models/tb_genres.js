const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_genres', {
    genre_id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    genre_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "uq_tb_genres_name"
    }
  }, {
    sequelize,
    tableName: 'tb_genres',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_genres_pkey",
        unique: true,
        fields: [
          { name: "genre_id" },
        ]
      },
      {
        name: "uq_tb_genres_name",
        unique: true,
        fields: [
          { name: "genre_name" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_playlist', {
    playlist_id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'tb_users',
        key: 'user_id'
      },
      unique: "uq_tb_playlist_user_name"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "uq_tb_playlist_user_name"
    }
  }, {
    sequelize,
    tableName: 'tb_playlist',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "tb_playlist_pkey",
        unique: true,
        fields: [
          { name: "playlist_id" },
        ]
      },
      {
        name: "uq_tb_playlist_user_name",
        unique: true,
        fields: [
          { name: "user_id" },
          { name: "name" },
        ]
      },
    ]
  });
};

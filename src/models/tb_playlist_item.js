const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_playlist_item', {
    playlist_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tb_playlist',
        key: 'playlist_id'
      }
    },
    content_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tb_content',
        key: 'content_id'
      }
    },
    added_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tb_playlist_item',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_tb_playlist_item_content_id",
        fields: [
          { name: "content_id" },
        ]
      },
      {
        name: "pk_tb_playlist_item",
        unique: true,
        fields: [
          { name: "playlist_id" },
          { name: "content_id" },
        ]
      },
    ]
  });
};

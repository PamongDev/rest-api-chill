const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_content_genres', {
    content_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tb_content',
        key: 'content_id'
      }
    },
    genre_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tb_genres',
        key: 'genre_id'
      }
    }
  }, {
    sequelize,
    tableName: 'tb_content_genres',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_tb_content_genres_genre_id",
        fields: [
          { name: "genre_id" },
        ]
      },
      {
        name: "pk_tb_content_genres",
        unique: true,
        fields: [
          { name: "content_id" },
          { name: "genre_id" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_movies', {
    content_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tb_content',
        key: 'content_type'
      }
    },
    content_type: {
      type: DataTypes.ENUM("movie","series"),
      allowNull: false,
      defaultValue: "movie",
      references: {
        model: 'tb_content',
        key: 'content_type'
      }
    },
    duration_minutes: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tb_movies',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_movies_pkey",
        unique: true,
        fields: [
          { name: "content_id" },
        ]
      },
    ]
  });
};

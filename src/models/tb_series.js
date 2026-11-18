const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_series', {
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
      defaultValue: "series",
      references: {
        model: 'tb_content',
        key: 'content_type'
      }
    },
    status: {
      type: DataTypes.ENUM("complete","ongoing"),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tb_series',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_series_pkey",
        unique: true,
        fields: [
          { name: "content_id" },
        ]
      },
    ]
  });
};

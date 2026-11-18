const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_content', {
    content_id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      unique: "uq_tb_content_id_type"
    },
    content_type: {
      type: DataTypes.ENUM("movie","series"),
      allowNull: false,
      unique: "uq_tb_content_id_type"
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    overview: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    poster_url: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    backdrop_url: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    trailer_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rating: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    release_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    is_premium: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    age_rating: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_content',
    schema: 'public',
    hasTrigger: true,
    timestamps: true,
    indexes: [
      {
        name: "idx_tb_content_created_at",
        fields: [
          { name: "created_at", order: "DESC" },
        ]
      },
      {
        name: "idx_tb_content_type_rating",
        fields: [
          { name: "content_type" },
          { name: "rating", order: "DESC" },
        ]
      },
      {
        name: "tb_content_pkey",
        unique: true,
        fields: [
          { name: "content_id" },
        ]
      },
      {
        name: "uq_tb_content_id_type",
        unique: true,
        fields: [
          { name: "content_id" },
          { name: "content_type" },
        ]
      },
    ]
  });
};

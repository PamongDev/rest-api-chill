const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_content_credits', {
    content_credit_id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    content_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'tb_content',
        key: 'content_id'
      }
    },
    person_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'tb_persons',
        key: 'person_id'
      }
    },
    character_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    job_role: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tb_content_credits',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_tb_content_credits_content_id",
        fields: [
          { name: "content_id" },
        ]
      },
      {
        name: "idx_tb_content_credits_person_id",
        fields: [
          { name: "person_id" },
        ]
      },
      {
        name: "tb_content_credits_pkey",
        unique: true,
        fields: [
          { name: "content_credit_id" },
        ]
      },
    ]
  });
};

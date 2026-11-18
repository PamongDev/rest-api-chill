const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_persons', {
    person_id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    profile_url: {
      type: DataTypes.STRING(2048),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_persons',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_persons_pkey",
        unique: true,
        fields: [
          { name: "person_id" },
        ]
      },
    ]
  });
};

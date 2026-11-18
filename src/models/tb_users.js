const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_users', {
    user_id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "uq_tb_users_username"
    },
    email: {
      type: DataTypes.STRING(254),
      allowNull: false,
      unique: "uq_tb_users_email"
    },
    password_hash: {
      type: DataTypes.STRING(2048),
      allowNull: false
    },
    subscription_type: {
      type: DataTypes.ENUM("free","premium"),
      allowNull: false,
      defaultValue: "free"
    },
    role: {
      type: DataTypes.ENUM("admin","user"),
      allowNull: false,
      defaultValue: "user"
    }
  }, {
    sequelize,
    tableName: 'tb_users',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "tb_users_pkey",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "uq_tb_users_email",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "uq_tb_users_username",
        unique: true,
        fields: [
          { name: "username" },
        ]
      },
    ]
  });
};

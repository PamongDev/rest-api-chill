const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_episodes', {
    episode_id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    season_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'tb_seasons',
        key: 'season_id'
      },
      unique: "uq_tb_episodes_season_number"
    },
    episode_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "uq_tb_episodes_season_number"
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    duration_minutes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    video_url: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_episodes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_episodes_pkey",
        unique: true,
        fields: [
          { name: "episode_id" },
        ]
      },
      {
        name: "uq_tb_episodes_season_number",
        unique: true,
        fields: [
          { name: "season_id" },
          { name: "episode_number" },
        ]
      },
    ]
  });
};

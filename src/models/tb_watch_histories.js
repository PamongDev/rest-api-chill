const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_watch_histories', {
    history_id: {
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
      unique: "uq_tb_watch_histories_user_movie"
    },
    movie_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'tb_movies',
        key: 'content_id'
      },
      unique: "uq_tb_watch_histories_user_movie"
    },
    episode_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'tb_episodes',
        key: 'episode_id'
      },
      unique: "uq_tb_watch_histories_user_episode"
    },
    progress_seconds: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    last_watched_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    completed_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_watch_histories',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_tb_watch_histories_episode_id",
        fields: [
          { name: "episode_id" },
        ]
      },
      {
        name: "idx_tb_watch_histories_movie_id",
        fields: [
          { name: "movie_id" },
        ]
      },
      {
        name: "idx_tb_watch_histories_user_last_watched",
        fields: [
          { name: "user_id" },
          { name: "last_watched_at", order: "DESC" },
        ]
      },
      {
        name: "tb_watch_histories_pkey",
        unique: true,
        fields: [
          { name: "history_id" },
        ]
      },
      {
        name: "uq_tb_watch_histories_user_episode",
        unique: true,
        fields: [
          { name: "user_id" },
          { name: "episode_id" },
        ]
      },
      {
        name: "uq_tb_watch_histories_user_movie",
        unique: true,
        fields: [
          { name: "user_id" },
          { name: "movie_id" },
        ]
      },
    ]
  });
};

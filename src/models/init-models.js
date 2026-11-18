var DataTypes = require("sequelize").DataTypes;
var _tb_content = require("./tb_content");
var _tb_content_credits = require("./tb_content_credits");
var _tb_content_genres = require("./tb_content_genres");
var _tb_episodes = require("./tb_episodes");
var _tb_genres = require("./tb_genres");
var _tb_movies = require("./tb_movies");
var _tb_persons = require("./tb_persons");
var _tb_playlist = require("./tb_playlist");
var _tb_playlist_item = require("./tb_playlist_item");
var _tb_seasons = require("./tb_seasons");
var _tb_series = require("./tb_series");
var _tb_users = require("./tb_users");
var _tb_watch_histories = require("./tb_watch_histories");

function initModels(sequelize) {
  var tb_content = _tb_content(sequelize, DataTypes);
  var tb_content_credits = _tb_content_credits(sequelize, DataTypes);
  var tb_content_genres = _tb_content_genres(sequelize, DataTypes);
  var tb_episodes = _tb_episodes(sequelize, DataTypes);
  var tb_genres = _tb_genres(sequelize, DataTypes);
  var tb_movies = _tb_movies(sequelize, DataTypes);
  var tb_persons = _tb_persons(sequelize, DataTypes);
  var tb_playlist = _tb_playlist(sequelize, DataTypes);
  var tb_playlist_item = _tb_playlist_item(sequelize, DataTypes);
  var tb_seasons = _tb_seasons(sequelize, DataTypes);
  var tb_series = _tb_series(sequelize, DataTypes);
  var tb_users = _tb_users(sequelize, DataTypes);
  var tb_watch_histories = _tb_watch_histories(sequelize, DataTypes);

  tb_content.belongsToMany(tb_genres, { as: 'genre_id_tb_genres', through: tb_content_genres, foreignKey: "content_id", otherKey: "genre_id" });
  tb_content.belongsToMany(tb_playlist, { as: 'playlist_id_tb_playlists', through: tb_playlist_item, foreignKey: "content_id", otherKey: "playlist_id" });
  tb_genres.belongsToMany(tb_content, { as: 'content_id_tb_contents', through: tb_content_genres, foreignKey: "genre_id", otherKey: "content_id" });
  tb_playlist.belongsToMany(tb_content, { as: 'content_id_tb_content_tb_playlist_items', through: tb_playlist_item, foreignKey: "playlist_id", otherKey: "content_id" });
  tb_content_credits.belongsTo(tb_content, { as: "content", foreignKey: "content_id"});
  tb_content.hasMany(tb_content_credits, { as: "tb_content_credits", foreignKey: "content_id"});
  tb_content_genres.belongsTo(tb_content, { as: "content", foreignKey: "content_id"});
  tb_content.hasMany(tb_content_genres, { as: "tb_content_genres", foreignKey: "content_id"});
  tb_movies.belongsTo(tb_content, { as: "content", foreignKey: "content_id"});
  tb_content.hasOne(tb_movies, { as: "tb_movie", foreignKey: "content_id"});
  tb_movies.belongsTo(tb_content, { as: "content_type_tb_content", foreignKey: "content_type"});
  tb_content.hasMany(tb_movies, { as: "content_type_tb_movies", foreignKey: "content_type"});
  tb_playlist_item.belongsTo(tb_content, { as: "content", foreignKey: "content_id"});
  tb_content.hasMany(tb_playlist_item, { as: "tb_playlist_items", foreignKey: "content_id"});
  tb_series.belongsTo(tb_content, { as: "content", foreignKey: "content_id"});
  tb_content.hasOne(tb_series, { as: "tb_sery", foreignKey: "content_id"});
  tb_series.belongsTo(tb_content, { as: "content_type_tb_content", foreignKey: "content_type"});
  tb_content.hasMany(tb_series, { as: "content_type_tb_series", foreignKey: "content_type"});
  tb_watch_histories.belongsTo(tb_episodes, { as: "episode", foreignKey: "episode_id"});
  tb_episodes.hasOne(tb_watch_histories, { as: "tb_watch_history", foreignKey: "episode_id"});
  tb_content_genres.belongsTo(tb_genres, { as: "genre", foreignKey: "genre_id"});
  tb_genres.hasMany(tb_content_genres, { as: "tb_content_genres", foreignKey: "genre_id"});
  tb_watch_histories.belongsTo(tb_movies, { as: "movie", foreignKey: "movie_id"});
  tb_movies.hasMany(tb_watch_histories, { as: "tb_watch_histories", foreignKey: "movie_id"});
  tb_content_credits.belongsTo(tb_persons, { as: "person", foreignKey: "person_id"});
  tb_persons.hasMany(tb_content_credits, { as: "tb_content_credits", foreignKey: "person_id"});
  tb_playlist_item.belongsTo(tb_playlist, { as: "playlist", foreignKey: "playlist_id"});
  tb_playlist.hasMany(tb_playlist_item, { as: "tb_playlist_items", foreignKey: "playlist_id"});
  tb_episodes.belongsTo(tb_seasons, { as: "season", foreignKey: "season_id"});
  tb_seasons.hasMany(tb_episodes, { as: "tb_episodes", foreignKey: "season_id"});
  tb_seasons.belongsTo(tb_series, { as: "series", foreignKey: "series_id"});
  tb_series.hasMany(tb_seasons, { as: "tb_seasons", foreignKey: "series_id"});
  tb_playlist.belongsTo(tb_users, { as: "user", foreignKey: "user_id"});
  tb_users.hasMany(tb_playlist, { as: "tb_playlists", foreignKey: "user_id"});
  tb_watch_histories.belongsTo(tb_users, { as: "user", foreignKey: "user_id"});
  tb_users.hasMany(tb_watch_histories, { as: "tb_watch_histories", foreignKey: "user_id"});

  return {
    tb_content,
    tb_content_credits,
    tb_content_genres,
    tb_episodes,
    tb_genres,
    tb_movies,
    tb_persons,
    tb_playlist,
    tb_playlist_item,
    tb_seasons,
    tb_series,
    tb_users,
    tb_watch_histories,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

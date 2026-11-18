const sequelize = require("../config/database");
const initModels = require("./init-models");

// Inisialisasi seluruh model dan relasinya
const models = initModels(sequelize);

// Export seluruh model agar bisa digunakan di file lain
module.exports = {
    sequelize,
    ...models
};
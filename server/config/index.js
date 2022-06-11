const keys = require("./keys.js");
module.exports = {
  username: keys.username,
  password: keys.password,
  database: keys.database,
  host: keys.host,
  dialect: keys.dialect,
  sslEnabled: keys.sslEnabled,
  seederStorage: "sequelize",
  seederStorageTableName: "SequelizeSeedData",
  freezeTableName: true,
  charset: "utf8",
  collate: "utf8_general_ci",
  SERVER_URL: keys.SERVER_URL,
  JWT_SECRET_KEY: keys.jwtSecretKey,
};

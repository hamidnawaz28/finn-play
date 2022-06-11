module.exports = {
  username: process.env.P_TH_DB_USERNAME,
  password: process.env.P_TH_DB_PASSWORD,
  database: process.env.P_TH_DB_NAME,
  host: process.env.P_TH_DB_HOST,
  dialect: process.env.P_TH_DB_DIALECT,
  jwtSecretKey: process.env.P_TH_JWT_SECRET_KEY,
  sslEnabled: true,
  SERVER_URL: "https://app.thrift-app.com/",
};

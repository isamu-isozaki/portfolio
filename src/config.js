/**
 * Author: Isamu Isozaki
 * .env file mapping from process.env to dict
 */
module.exports = {
  APP_PORT: process.env.APP_PORT,
  MILTER_PORT: process.env.MILTER_PORT,
  KIARA_API_URL: process.env.KIARA_API_URL,
  DB_URI: process.env.DB_URI,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  X_RAPIDAPI_HOST: process.env.X_RAPIDAPI_HOST,
  X_RAPIDAPI_KEY: process.env.X_RAPIDAPI_KEY,
  API_URL: process.env.API_URL,
  DOMAIN_URL: process.env.DOMAIN_URL,
  MAIL_HOST: process.env.MAIL_HOST,
};

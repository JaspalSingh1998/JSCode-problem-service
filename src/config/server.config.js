const dotenv = require('dotenv').config()

module.exports = {
    PORT:process.env.PORT,
    ATLAS_DB_URL: process.env.DEV_DB_URL,
    LOG_DB_URL: process.env.LOG_DB_URL,
    NODE_ENV: process.env.NODE_ENV
}
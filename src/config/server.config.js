const dotenv = require('dotenv').config()

module.exports = {
    PORT:process.env.PORT,
    ATLAS_DB_URL: process.env.MONGO_DB_ATLAS,
    NODE_ENV: process.env.NODE_ENV
}
const dotenv = require('dotenv')
dotenv.config()

exports.info = {
    datebase: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USESR,
    password: process.env.DB_PASSWORD,
}
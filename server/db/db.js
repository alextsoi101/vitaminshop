const {Sequelize} = require('sequelize');

const PORT=5000
const DB_NAME='vitaminstore'
const DB_USER='postgres'
const DB_PASSWORD='21611'
const DB_HOST='localhost'
const DB_PORT=5432
const SECRET_KEY='random_secret_key123'

module.exports = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    {
        dialect: 'postgres',
        host: DB_HOST,
        port: DB_PORT
    }
);
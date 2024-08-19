const { Sequelize } = require("sequelize");

const connection = new Sequelize({
  dialect: "mysql",
  database: "projeto-backend",
  host: "localhost",
  username: "root",
  password: "@Engen23",
  port: 3306,
});

module.exports = connection;

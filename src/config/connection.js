const dotenv = require("dotenv");
dotenv.config();
console.log("Conectando...");
module.exports = {
  production: {
    dialect: process.env.DIALECT,
    host: process.env.HOST,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    operatorAliases: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
  development: {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'up-service-back_database_1',
    operatorAliases: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
};

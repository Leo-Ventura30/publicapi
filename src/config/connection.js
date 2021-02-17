const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  production: {
    dialect: process.env.DIALECT,
    host: process.env.HOST,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    operatorAliases: false,
    ssl: true,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
  development: {
    dialect: process.env.DIALECTENV,
    host: process.env.HOSTENV,
    username: process.env.USERENV,
    password: process.env.PASSWORDENV,
    database: process.env.DATABASEENV,
    operatorAliases: false,
    ssl: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
};

const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  production: {
    dialect: process.env.DIALECT,
    host: process.env.HOST,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    use_env_variable: process.env.DATABASE_URL,
    operatorAliases: false,
    ssl: true,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
};

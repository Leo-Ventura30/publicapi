const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  production: {
    use_env_variable: process.env.USE_ENV_VARIABLE,
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
};

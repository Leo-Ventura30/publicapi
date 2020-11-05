// const path = require("path");
module.exports = {
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
};

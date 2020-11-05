const express = require("express");
const session = require("express-session");
const cors = require("cors");
const path = require("path");
const app = express();
var memjs = require("memjs");
var memCachedStore = require("connect-memjs")(session);
app.disable("x-powered-by");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// memjs.Client.create(process.env.MEMCACHIER_SERVERS, {
//   failover: true,
//   timeOut: 1,
//   keepAlive: true,
// });
// app.use(
//   session({
//     secret: "MyPetUP-Session-generate",
//     resave: false,
//     store: new memCachedStore({
//       servers: [process.env.MEMCACHIER_SERVERS],
//       prefix: "_session_",
//     }),
//     saveUninitialized: false,
//   })
// );

//rota padrao de docs publico
// app.use(express.static(path.resolve(__dirname, "app", "public")));

app.use("/", require("./app/routes/routes"));

module.exports = app;

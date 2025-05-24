const express = require("express");
const serverConfig = require("./config/serverConfig");
const indexRoutes = require("./routes/indexRoutes");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();

serverConfig(app);

// !РАССКОМЕНТИРУЙ КОГДА СОЗДАШЬ МОДЕЛИ
// app.use("/api", indexRoutes);
app.use(errorMiddleware);

module.exports = app;

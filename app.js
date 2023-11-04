const express = require("express");
const app = express();
const body_parser = require('body-parser');
const userRouter = require("./routers/user.router");
app.use(body_parser.json());
app.use('/api', userRouter)
module.exports = app;
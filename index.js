const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8080;

app.use(cookieParser());

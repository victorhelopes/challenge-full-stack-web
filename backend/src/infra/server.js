require('dotenv').config();
const express = require("express");
const cors = require("cors")

require('./database')

const app = express();

const port = process.env.PORT || 3000;

app.use(cors())

app.use(express.json());

app.listen(port);
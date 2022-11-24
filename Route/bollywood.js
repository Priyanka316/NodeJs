const express = require('express');

const app = express();
const data = require("../Controller/Bollywood");


const dataRouter = express.Router();
dataRouter.route('/bollywood').get(data.BollywoodData)

module.exports = dataRouter;
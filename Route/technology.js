const express = require('express');

const app = express();
const data3 = require("../Controller/Technology");


const dataRouter = express.Router();
dataRouter.route('/technology').get(data3.TechnologyData)

module.exports = dataRouter;
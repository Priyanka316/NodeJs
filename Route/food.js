const express = require('express');

const app = express();
const data4 = require("../Controller/Food");


const dataRouter = express.Router();
dataRouter.route('/food').get(data4.FoodData)

module.exports = dataRouter;
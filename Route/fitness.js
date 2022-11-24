const express = require('express');

const app = express();
const data5= require("../Controller/Fitness");


const dataRouter = express.Router();
dataRouter.route('/fitness').get(data5.FitData)

module.exports = dataRouter;
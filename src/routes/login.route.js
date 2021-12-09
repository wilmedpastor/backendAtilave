const express = require('express');
const loginCtrl = require('../controller/login.controller');
const Router = express.Router();

Router.post('/', loginCtrl);

module.exports = Router;
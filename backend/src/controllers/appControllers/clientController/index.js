const mongoose = require('mongoose');
const createCRUDController = require('@/controllers/middlewaresControllers/createCRUDController');

const summary = require('./summary');

function modelController() {
  const methods = createCRUDController('Client');
  methods.summary = (req, res) => summary(mongoose.model('Client'), req, res);
  return methods;
}

module.exports = modelController();

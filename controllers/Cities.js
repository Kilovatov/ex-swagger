'use strict';

var utils = require('../utils/writer.js');
var Cities = require('../service/CitiesService');

module.exports.addCity = function addCity (req, res, next) {
  var body = req.swagger.params['body'].value;
  Cities.addCity(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCity = function deleteCity (req, res, next) {
  var cityId = req.swagger.params['cityId'].value;
  Cities.deleteCity(cityId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findAllCities = function findAllCities (req, res, next) {
  Cities.findAllCities()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findCityById = function findCityById (req, res, next) {
  var cityId = req.swagger.params['cityId'].value;
  Cities.findCityById(cityId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putCity = function putCity (req, res, next) {
  var body = req.swagger.params['body'].value;
  Cities.putCity(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

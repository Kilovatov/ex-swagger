'use strict';

var utils = require('../utils/writer.js');
var Products = require('../service/ProductsService');

module.exports.addProduct = function addProduct (req, res, next) {
  var body = req.swagger.params['body'].value;
  Products.addProduct(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProduct = function deleteProduct (req, res, next) {
  var productId = req.swagger.params['productId'].value;
  Products.deleteProduct(productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findAllProducts = function findAllProducts (req, res, next) {
  Products.findAllProducts()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findProductById = function findProductById (req, res, next) {
  var productId = req.swagger.params['productId'].value;
  Products.findProductById(productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findProductReviewById = function findProductReviewById (req, res, next) {
  var productId = req.swagger.params['productId'].value;
  Products.findProductReviewById(productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

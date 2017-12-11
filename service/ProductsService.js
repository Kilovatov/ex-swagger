'use strict';


/**
 * Add a new product to the store
 *
 * body Product Product object that needs to be added to the store
 * returns List
 **/
exports.addProduct = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "reviews" : [ "reviews", "reviews" ],
  "price" : "price",
  "id" : "id",
  "product_name" : "product_name"
}, {
  "reviews" : [ "reviews", "reviews" ],
  "price" : "price",
  "id" : "id",
  "product_name" : "product_name"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes a product
 *
 * productId String Id to filter by
 * returns Product
 **/
exports.deleteProduct = function(productId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "reviews" : [ "reviews", "reviews" ],
  "price" : "price",
  "id" : "id",
  "product_name" : "product_name"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Finds all Products
 *
 * returns List
 **/
exports.findAllProducts = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "reviews" : [ "reviews", "reviews" ],
  "price" : "price",
  "id" : "id",
  "product_name" : "product_name"
}, {
  "reviews" : [ "reviews", "reviews" ],
  "price" : "price",
  "id" : "id",
  "product_name" : "product_name"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Finds Product by id
 *
 * productId String Id to filter by
 * returns Product
 **/
exports.findProductById = function(productId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "reviews" : [ "reviews", "reviews" ],
  "price" : "price",
  "id" : "id",
  "product_name" : "product_name"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Finds reviews on Product by id
 *
 * productId String Id to filter by
 * returns List
 **/
exports.findProductReviewById = function(productId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


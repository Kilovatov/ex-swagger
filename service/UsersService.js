'use strict';


/**
 * Add a new user to the store
 *
 * body User User object that needs to be added to the store
 * returns List
 **/
exports.addUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "surname" : "surname",
  "name" : "name",
  "id" : "id"
}, {
  "surname" : "surname",
  "name" : "name",
  "id" : "id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes a user
 *
 * userId String Id to be deleted
 * returns User
 **/
exports.deleteUser = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "surname" : "surname",
  "name" : "name",
  "id" : "id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Finds all users
 *
 * returns List
 **/
exports.findAllUsers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "surname" : "surname",
  "name" : "name",
  "id" : "id"
}, {
  "surname" : "surname",
  "name" : "name",
  "id" : "id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Finds User by id
 *
 * userId String Id to be found by
 * returns User
 **/
exports.findUserById = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "surname" : "surname",
  "name" : "name",
  "id" : "id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


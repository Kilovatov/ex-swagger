'use strict';


/**
 * Add a new city to the store
 *
 * body City City object that needs to be added to the store
 * returns List
 **/
exports.addCity = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "country" : "country",
  "capital" : true,
  "name" : "name",
  "location" : {
    "lat" : 0.80082819046101150206595775671303272247314453125,
    "long" : 6.02745618307040320615897144307382404804229736328125
  },
  "id" : "id"
}, {
  "country" : "country",
  "capital" : true,
  "name" : "name",
  "location" : {
    "lat" : 0.80082819046101150206595775671303272247314453125,
    "long" : 6.02745618307040320615897144307382404804229736328125
  },
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
 * Deletes a city
 *
 * cityId String Id to be deleted
 * returns City
 **/
exports.deleteCity = function(cityId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : "country",
  "capital" : true,
  "name" : "name",
  "location" : {
    "lat" : 0.80082819046101150206595775671303272247314453125,
    "long" : 6.02745618307040320615897144307382404804229736328125
  },
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
 * Finds all Cities
 *
 * returns List
 **/
exports.findAllCities = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "country" : "country",
  "capital" : true,
  "name" : "name",
  "location" : {
    "lat" : 0.80082819046101150206595775671303272247314453125,
    "long" : 6.02745618307040320615897144307382404804229736328125
  },
  "id" : "id"
}, {
  "country" : "country",
  "capital" : true,
  "name" : "name",
  "location" : {
    "lat" : 0.80082819046101150206595775671303272247314453125,
    "long" : 6.02745618307040320615897144307382404804229736328125
  },
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
 * Finds City by id
 *
 * cityId String Id to filter by
 * returns City
 **/
exports.findCityById = function(cityId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : "country",
  "capital" : true,
  "name" : "name",
  "location" : {
    "lat" : 0.80082819046101150206595775671303272247314453125,
    "long" : 6.02745618307040320615897144307382404804229736328125
  },
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
 * Add a new city or modify existing one
 *
 * body City City object that needs to be added or modified in the store
 * returns List
 **/
exports.putCity = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "country" : "country",
  "capital" : true,
  "name" : "name",
  "location" : {
    "lat" : 0.80082819046101150206595775671303272247314453125,
    "long" : 6.02745618307040320615897144307382404804229736328125
  },
  "id" : "id"
}, {
  "country" : "country",
  "capital" : true,
  "name" : "name",
  "location" : {
    "lat" : 0.80082819046101150206595775671303272247314453125,
    "long" : 6.02745618307040320615897144307382404804229736328125
  },
  "id" : "id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


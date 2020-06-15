var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables columns and values are arrays//
  create: function(columns, values, cb) {
    orm.create("burgers", columns, values, function(result) {
      cb(result);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(result) {
      cb(result);
    });
  }
};

module.exports = burger;
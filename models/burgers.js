'use strict';
module.exports = (sequelize, DataTypes) => {
  var Burgers = sequelize.define('Burgers', {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  }, {});
  Burgers.associate = function(models) {
    // associations can be defined here
  };
  return Burgers;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Burger = sequelize.define('Burger', {
    burger_name: DataTypes.STRING
  }, {});
  Burger.associate = function(models) {
    // associations can be defined here
  };
  return Burger;
};
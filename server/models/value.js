"use strict";
module.exports = (sequelize, DataTypes) => {
  const Value = sequelize.define(
    "Value",
    {
      label: DataTypes.STRING,
      value: DataTypes.STRING
    },
    {}
  );
  return Value;
};

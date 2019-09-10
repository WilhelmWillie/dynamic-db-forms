"use strict";
module.exports = (sequelize, DataTypes) => {
  const Field = sequelize.define(
    "Field",
    {
      label: DataTypes.STRING,
      type: DataTypes.STRING,
      order: DataTypes.INTEGER,
      required: DataTypes.BOOLEAN,
      active: DataTypes.BOOLEAN
    },
    {}
  );
  Field.associate = function(models) {
    Field.hasMany(models.Value);
  };
  return Field;
};

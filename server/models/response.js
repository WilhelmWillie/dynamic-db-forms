"use strict";
module.exports = (sequelize, DataTypes) => {
  const Response = sequelize.define(
    "Response",
    {
      username: DataTypes.STRING,
      value: DataTypes.STRING
    },
    {}
  );
  Response.associate = function(models) {
    Response.belongsTo(models.Field);
  };
  return Response;
};

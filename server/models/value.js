const Value = (sequelize, type) => {
  return sequelize.define("Value", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    key: type.STRING,
    value: type.STRING
  });
};

export default Value;

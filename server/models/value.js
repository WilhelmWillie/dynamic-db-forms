const Value = (sequelize, type) => {
  return sequelize.define("field", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    key: {
      type: type.STRING
    },
    value: {
      type: type.STRING
    }
  });
};

export default Value;

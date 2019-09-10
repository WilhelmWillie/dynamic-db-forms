const Field = (sequelize, type) => {
  return sequelize.define("field", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    order: {
      type: type.INTEGER
    }
  });
};

export default Field;

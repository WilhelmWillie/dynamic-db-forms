const Field = (sequelize, type) => {
  return sequelize.define("field", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  });
};

export default Field;

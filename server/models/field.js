const Field = (sequelize, type) => {
  return sequelize.define("Field", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    order: type.INTEGER,
    label: type.STRING,
    type: type.STRING
  });
};

export default Field;

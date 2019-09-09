const Form = (sequelize, type) => {
  return sequelize.define("form", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  });
};

export default Form;

const Response = (sequelize, type) => {
  return sequelize.define("response", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  });
};

export default Response;

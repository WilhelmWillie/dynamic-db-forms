const Response = (sequelize, type) => {
  return sequelize.define("Response", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    value: type.STRING,
    username: type.STRING
  });
};

export default Response;

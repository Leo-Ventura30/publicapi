module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define("Schedule", {
    date: DataTypes.DATE,
    dog: DataTypes.STRING,
    location: DataTypes.STRING,
    type: DataTypes.STRING,
    value: DataTypes.FLOAT,
    status: DataTypes.INTEGER,
  });

  Schedule.associate = (models) => {
    Schedule.belongsTo(models.User, { foreignKey: "user_id" });
  };

  return Schedule;
};

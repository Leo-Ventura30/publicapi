module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define("Appointment", {
    date: DataTypes.DATE,
    location: DataTypes.STRING,
    type: DataTypes.STRING,
    value: DataTypes.FLOAT,
    status: DataTypes.INTEGER,
  });

  Appointment.associate = (models) => {
    Appointment.belongsTo(models.User, { foreignKey: "employers_id" });
    Appointment.belongsTo(models.User, { foreignKey: "user_id" });
  };

  return Appointment;
};

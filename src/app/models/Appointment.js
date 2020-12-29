module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define("Appointment", {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    date: DataTypes.DATE,
    location: DataTypes.STRING,
    type: DataTypes.STRING,
    value: DataTypes.FLOAT,
    status: DataTypes.INTEGER,
  });

  Appointment.associate = (models) => {
    Appointment.belongsTo(models.User, { foreignKey: "employers_id" });
    Appointment.belongsTo(models.User, { foreignKey: "users_id" });
  };

  return Appointment;
};

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
    },
    name: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    uf: DataTypes.STRING,
    city: DataTypes.STRING,
  });

  return User;
};

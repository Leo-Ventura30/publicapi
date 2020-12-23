const bcrypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  const Employer = sequelize.define(
    "Employer",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
      },
      commerce: DataTypes.STRING,
      category: DataTypes.STRING,
      uf: DataTypes.STRING,
      city: DataTypes.STRING,
      email: DataTypes.STRING,
      user: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING,
    },
    {
      hooks: {
        beforeSave: async (user) => {
          if (user.password) {
            user.password_hash = await bcrypt.hash(user.password, 8);
          }
        },
      },
    }
  );

  Employer.prototype.checkPassword = function (password) {
    return bcrypt.compare(password, this.password_hash);
  };
  return Employer;
};

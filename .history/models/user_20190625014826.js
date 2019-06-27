module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING
  });
  User.associate = function(models) {
    User.HasMany(models.Bill);
  };
  return User;
};
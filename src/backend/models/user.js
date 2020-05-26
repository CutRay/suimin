'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      twitterId: DataTypes.STRING,
      isWaking: DataTypes.BOOLEAN,
      idealTime: DataTypes.DATE
    },
    {}
  )
  User.associate = function(models) {
    User.hasMany(models.Active, { foreignKey: 'userId' })
    User.hasMany(models.Rest, { foreignKey: 'userId' })
  }
  return User
}

'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      twitterId: DataTypes.STRING,
      isWaking: DataTypes.BOOLEAN,
      idealTime: DataTypes.DATE
    },
    { tableName: 'Users' }
  )
  User.associate = function(models) {
    User.hasMany(models.Sleep, { foreignKey: 'userId' })
  }
  return User
}

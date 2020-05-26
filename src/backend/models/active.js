'use strict'
module.exports = (sequelize, DataTypes) => {
  const Active = sequelize.define(
    'Active',
    {
      startTime: DataTypes.DATE,
      userId: DataTypes.INTEGER,
      idealTime: DataTypes.DATE
    },
    {}
  )
  Active.associate = function(models) {
    // associations can be defined here
  }
  return Active
}

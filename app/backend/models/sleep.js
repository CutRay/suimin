'use strict'
module.exports = (sequelize, DataTypes) => {
  const Sleep = sequelize.define(
    'Sleep',
    {
      idealTime: DataTypes.DATE,
      startTime: DataTypes.DATE,
      endTime: DataTypes.DATE,
      userId: DataTypes.INTEGER
    },
    { tableName: 'Sleeps' }
  )
  Sleep.associate = function(models) {
    // associations can be defined here
  }
  return Sleep
}

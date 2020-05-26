'use strict'
module.exports = (sequelize, DataTypes) => {
  const Rest = sequelize.define(
    'Rest',
    {
      startTime: DataTypes.DATE,
      userId: DataTypes.INTEGER
    },
    {}
  )
  Rest.associate = function(models) {
    // associations can be defined here
  }
  return Rest
}

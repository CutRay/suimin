'use strict'
module.exports = (sequelize, DataTypes) => {
  const Rest = sequelize.define(
    'Rest',
    {
      userId: DataTypes.INTEGER,
      startTime: DataTypes.DATE
    },
    {}
  )
  Rest.associate = function(models) {
    Active.belongTo(model.Rest)
  }
  return Rest
}

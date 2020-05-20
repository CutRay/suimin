'use strict'
module.exports = (sequelize, DataTypes) => {
  const Active = sequelize.define(
    'Active',
    {
      userId: DataTypes.INTEGER,
      startTime: DataTypes.DATE,
      diffarenceTime: DataTypes.DATE
    },
    {}
  )
  Active.associate = function(models) {
    Active.belongTo(model.User)
  }
  return Active
}

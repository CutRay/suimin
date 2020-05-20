'use strict'

const db = require('../models/')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Actives',
      [
        {
          userId: 1,
          startTime: new Date(),
          diffarenceTime: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Actives', null, {})
  }
}

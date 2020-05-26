'use strict'

const db = require('../models/')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Rests',
      [
        {
          userId: 1,
          startTime: new Date(2020, 5, 26, 21, 0),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          startTime: new Date(2020, 5, 25, 22, 0),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          startTime: new Date(2020, 5, 25, 20, 0),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          startTime: new Date(2020, 5, 25, 13, 0),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          startTime: new Date(2020, 5, 25, 14, 30),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rests', null, {})
  }
}

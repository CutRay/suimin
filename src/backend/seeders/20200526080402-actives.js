'use strict'

const db = require('../models/')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Actives',
      [
        {
          userId: 1,
          startTime: new Date(2020, 5, 26, 9, 0),
          idealTime: new Date(2020, 5, 26, 8, 0),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          startTime: new Date(2020, 5, 25, 13, 0),
          idealTime: new Date(2020, 5, 25, 8, 0),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          startTime: new Date(2020, 5, 25, 15, 0),
          idealTime: new Date(2020, 5, 25, 8, 0),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          startTime: new Date(2020, 5, 25, 9, 0),
          idealTime: new Date(2020, 5, 25, 7, 0),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          startTime: new Date(2020, 5, 25, 11, 30),
          idealTime: new Date(2020, 5, 25, 7, 0),
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

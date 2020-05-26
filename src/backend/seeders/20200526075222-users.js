'use strict'

const db = require('../models/')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 1,
          twitterId: 'sample1',
          isWaking: false,
          idealTime: new Date(2000, 12, 26, 12, 0),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          twitterId: 'sample2',
          isWaking: false,
          idealTime: new Date(2000, 7, 9, 7, 0),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          twitterId: 'sample3',
          isWaking: true,
          idealTime: new Date(1970, 8, 17, 10, 0),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          twitterId: 'sample4',
          isWaking: true,
          idealTime: new Date(1969, 11, 1, 8, 0),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
}

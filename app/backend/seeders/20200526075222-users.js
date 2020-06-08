'use strict'
const db = require('../models/')
const { convertTimezone } = require('../tools/dateFormatter')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 1,
          twitterId: 'sample1',
          isWaking: false,
          idealTime: convertTimezone('2000-12-26T12:00:00', 'Asia/Tokyo'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          twitterId: 'sample2',
          isWaking: false,
          idealTime: convertTimezone('2000-07-09T07:00:00', 'Asia/Tokyo'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          twitterId: 'sample3',
          isWaking: true,
          idealTime: convertTimezone('1970-08-17T10:00:00', 'Asia/Tokyo'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          twitterId: 'sample4',
          isWaking: true,
          idealTime: convertTimezone('1969-11-01T08:50:00', 'Asia/Tokyo'),
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

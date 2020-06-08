'use strict'
const db = require('../models/')
const { convertTimezone } = require('../tools/dateFormatter')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Sleeps',
      [
        {
          userId: 1,
          startTime: convertTimezone('2020-05-26T22:00:00', 'Asia/Tokyo'),
          endTime: convertTimezone('2020-05-27T09:00:00', 'Asia/Tokyo'),
          idealTime: convertTimezone('2020-05-27T08:00:00', 'Asia/Tokyo'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          startTime: convertTimezone('2020-05-25T22:00:00', 'Asia/Tokyo'),
          endTime: convertTimezone('2020-05-26T13:00:00', 'Asia/Tokyo'),
          idealTime: convertTimezone('2020-05-26T08:00:00', 'Asia/Tokyo'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          startTime: convertTimezone('2020-05-25T20:00:00', 'Asia/Tokyo'),
          endTime: convertTimezone('2020-05-26T15:00:00', 'Asia/Tokyo'),
          idealTime: convertTimezone('2020-05-26T08:00:00', 'Asia/Tokyo'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          startTime: convertTimezone('2020-05-25T13:00:00', 'Asia/Tokyo'),
          endTime: convertTimezone('2020-05-26T09:00:00', 'Asia/Tokyo'),
          idealTime: convertTimezone('2020-05-26T07:00:00', 'Asia/Tokyo'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          startTime: convertTimezone('2020-05-25T14:30:00', 'Asia/Tokyo'),
          endTime: convertTimezone('2020-05-26T06:30:00', 'Asia/Tokyo'),
          idealTime: convertTimezone('2020-05-26T07:00:00', 'Asia/Tokyo'),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sleeps', null, {})
  }
}

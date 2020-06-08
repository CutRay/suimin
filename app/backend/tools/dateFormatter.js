const momentTimezone = require('moment-timezone')
module.exports = {
  convertTimezone: (date, zone) => {
    return momentTimezone(date + 'Z')
      .tz(zone)
      .toDate()
  }
}

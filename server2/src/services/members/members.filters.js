/* eslint no-console: 1 */

const message =
  'You are using the default filter for the members service. For more information about event filters see https://docs.feathersjs.com/api/events.html#event-filtering'

// eslint-disable-next-line no-console
console.warn(message)

module.exports = function(data, connection, hook) {
  // eslint-disable-line no-unused-vars
  return data
}

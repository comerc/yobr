const members = require('./members/members.service.js')
const messages = require('./messages/messages.service.js')
const users = require('./users/users.service.js')
module.exports = function() {
  const app = this // eslint-disable-line no-unused-vars
  app.configure(members)
  app.configure(messages)
  app.configure(users)
}

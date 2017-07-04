const members = require('./members/members.service.js')
module.exports = function() {
  const app = this // eslint-disable-line no-unused-vars
  app.configure(members)
}

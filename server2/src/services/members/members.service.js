// Initializes the `members` service on path `/members`
const createService = require('feathers-nedb')
const createModel = require('../../models/members.model')
const hooks = require('./members.hooks')
const filters = require('./members.filters')

module.exports = function() {
  const app = this
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    name: 'members',
    Model,
    paginate,
  }

  // Initialize our service with any options it requires
  app.use('/members', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('members')

  service.hooks(hooks)

  if (service.filter) {
    service.filter(filters)
  }
}

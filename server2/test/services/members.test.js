const assert = require('assert')
const app = require('../../src/app')

describe('"members" service', () => {
  it('registered the service', () => {
    const service = app.service('members')

    assert.ok(service, 'Registered the service')
  })
})

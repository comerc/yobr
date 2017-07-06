import React from 'react'
import { shallow } from 'enzyme'
import reducer from 'ducks/PostFormC'
import { PostFormC } from './PostFormC'

const props = reducer()

describe('PostFormC', () => {
  it('renders without crashing', () => {
    shallow(<PostFormC {...props} />)
  })
})

import React from 'react'
import { shallow } from 'enzyme'
import reducer from 'ducks/postForm'
import { PostForm } from './PostForm'

const props = reducer()

describe('PostForm', () => {
  it('renders without crashing', () => {
    shallow(<PostForm {...props} />)
  })
})

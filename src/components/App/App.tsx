import * as React from 'react'
import './App.css'
import { Button } from 'antd'
import { isEmpty } from 'lodash'

const logo = require('logo.svg')

const a = 123

if (isEmpty(a)) {
  console.log('test')
}

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button type="primary">Test</Button>
      </div>
    )
  }
}

export default App

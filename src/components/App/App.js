import React, { PropTypes } from 'react'

const App = ({ children }) => (
  <div>123
    {children}
  </div>
)

// App.propTypes = {
//   children: PropTypes.any.isRequired,
// }

export { Header } from './Header'
export { Footer } from './Footer'
export { NotFound } from './NotFound'
export default App

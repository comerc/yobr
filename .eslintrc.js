module.exports = {
  extends: 'react-app',
  rules: { 
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}

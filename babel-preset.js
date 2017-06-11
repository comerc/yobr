module.exports = {
  plugins: [
    // не работает jest, заменил на NODE_PATH=src/ в .env
    ['module-resolver', { root: ['src'] }],
    'lodash',
    'babel-plugin-idx',
    'styled-jsx-postcss/babel',
    // 'flow-react-proptypes',
    'tcomb',
  ],
}

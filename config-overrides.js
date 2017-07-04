function rewire(config, env) {
  const babelOptions = config.module.rules.find(conf => {
    return conf.loader && conf.loader.includes('babel-loader')
  }).options
  const babelrc = require(babelOptions.presets[0])
  babelrc.plugins = [
    // не работает jest, заменил на NODE_PATH=src/ в .env
    ['module-resolver', { root: ['src'] }],
    ['import', { libraryName: 'antd', style: true }], // сократил на 122 KB
    'lodash', // сократил на 23 KB
    'babel-plugin-idx',
    'styled-jsx-postcss/babel',
    // 'flow-react-proptypes',
    'tcomb',
    'transform-decorators-legacy',
  ].concat(babelrc.plugins || [])
  babelOptions.presets = babelrc
  return config
}

module.exports = rewire

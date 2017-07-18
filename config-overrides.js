function rewire(config, env) {
  const babelOptions = config.module.rules.find(conf => {
    return conf.loader && conf.loader.includes('babel-loader')
  }).options
  const babelrc = require(babelOptions.presets[0])
  babelrc.plugins = [
    // 1. не работает jest, заменил на NODE_PATH=src/ в .env
    // 2. не работает webpack2, заменил на config.resolve.modules
    // ['module-resolver', { root: ['src'] }],
    [
      'import-inspector',
      {
        // serverSideRequirePath: true,
        webpackRequireWeakId: true,
      },
    ], // см. react-loadable
    ['import', { libraryName: 'antd', style: false }], // сократил на 122 KB
    'lodash', // сократил на 23 KB
    'babel-plugin-idx',
    'styled-jsx-postcss/babel',
    // 'flow-react-proptypes',
    'tcomb',
    'transform-decorators-legacy',
  ].concat(babelrc.plugins || [])
  babelOptions.presets = babelrc

  const rewireLess = require('react-app-rewire-less')
  config = rewireLess(config, env)

  const path = require('path')
  config.resolve.modules = [path.resolve('src')].concat(config.resolve.modules)

  return config
}

module.exports = rewire

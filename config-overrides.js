const babelLoader = function (conf) {
  return conf.loader === 'babel'
}

function rewire(config, env) {
  const babelrc = config.module.loaders.find(babelLoader).query
  babelrc.plugins = [
    'styled-jsx/babel',
    // не работает jest, заменил на NODE_PATH=src/ в .env
    // ['module-resolver', { 'root': ['src'] }],
    // 'flow-react-proptypes',
    'tcomb',
  ].concat(babelrc.plugins || [])

  delete config.eslint.configFile
  config.eslint.useEslintrc = true

  return config
}

module.exports = rewire

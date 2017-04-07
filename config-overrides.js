const babelLoader = function (conf) {
  return conf.loader === 'babel'
}

function rewire(config, env) {
  const babelrc = config.module.loaders.find(babelLoader).query
  babelrc.plugins = [
    'styled-jsx/babel',
    ['module-resolver', { 'root': ['src'] }],
  ].concat(babelrc.plugins || [])

  return config
}

module.exports = rewire

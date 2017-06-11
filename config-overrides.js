function rewire(config, env) {
  const babelOptions = config.module.rules.find(
    conf => conf.loader && conf.loader.includes('babel-loader'),
  ).options
  const path = require('path')
  babelOptions.presets = babelOptions.presets.concat(path.resolve('babel-preset.js'))
  return config
}

module.exports = rewire

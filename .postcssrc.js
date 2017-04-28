module.exports = (ctx) => ({
  plugins: {
    'postcss-discard-comments': { removeAll: true },
    'postcss-inline-comment': {},
    'postcss-cssnext': {},
  }
})

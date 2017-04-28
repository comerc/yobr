module.exports = () => ({
  plugins: {
    'postcss-discard-comments': { removeAll: true },
    'postcss-inline-comment': {},
    'postcss-cssnext': {},
  }
})

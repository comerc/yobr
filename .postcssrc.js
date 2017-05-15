module.exports = context => ({
  plugins: {
    'postcss-discard-comments': { removeAll: true },
    'postcss-inline-comment': {},
    'postcss-cssnext': {},
  },
})

const path = require('path')

module.exports = (webpackConfig, env, { paths }) => {
  const babelLoaderFilter = rule => rule.loader && rule.loader.includes("babel") && rule.options && rule.options.plugins
  let loaders = webpackConfig.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf
  let babelLoader = loaders.find(babelLoaderFilter)

  if (!babelLoader) {
    loaders = loaders.reduce((ldrs, rule) => ldrs.concat(rule.use || []), []);
    babelLoader = loaders.find(babelLoaderFilter);
  }

  webpackConfig.module.rules.map(rule => {
    if (typeof rule.test !== 'undefined' || typeof rule.oneOf === 'undefined') {
      return rule
    }

    rule.oneOf.unshift({
      test: /.mdx?$/,
      use: [
        {
          loader: babelLoader.loader,
          options: babelLoader.options
        },
        '@mdx-js/loader'
      ]
    })

    rule.oneOf.unshift({
      test: /.txt$/,
      use: [
        {
          loader: babelLoader.loader,
          options: babelLoader.options
        },
        'raw-loader'
      ]
    })

    return rule
  })

  webpackConfig.resolve = {
    alias: {
      // alias React for npm link to use a hoisted package
      react: path.resolve(path.join(__dirname, './node_modules/react')),
    },
  }

  return webpackConfig
}

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

    return rule
  })

  return webpackConfig
}
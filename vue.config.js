// vue.config.js
module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Spotifind! - Find your song'
        return args
      })

    // pug loader
    config.module.rule('pug').oneOf('pug-vue')
      .clear()
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
      .options({ basedir: './' })
  }
}

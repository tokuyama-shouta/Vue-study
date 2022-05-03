const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'',
  pages: {
    index: {
      entry: 'src/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    users: {
      entry: 'src/users/main.js',
      template: 'public/users.html',
      filename: 'users.html',
      title: 'Users Page',
      chunks: ['chunk-vendors', 'chunk-common', 'users']
    },
  }
})

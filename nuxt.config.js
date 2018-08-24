const path = require('path');
const webpack = require('webpack');
const {
  findLoaders,
  modifyLoaders,
  getFilesFromDir,
  markClientPlugins
} = require('./config/utils');

const plugins = getFilesFromDir('./plugins', /\.js$/);

module.exports = {
  head: {
    title: 'БКС Брокер',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'y' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  plugins: markClientPlugins(
    plugins,
    ['vue-select', 'inputmask']
  ),

  build: {
    watch: ['server', 'common', 'config'],

    vendor: plugins.concat(['babel-polyfill', 'axios']),

    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 4
      })
    ],

    extractCSS: { allChunks: true },

    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
      modifyLoaders(config.module.rules, {
        'url-loader': (result) => {
          result.test = /\.(png|jpe?g|gif)$/;

          config.module.rules.push({
            test: /\.svg$/,
            loader: 'svg-inline-loader',
            exclude: /node_modules/
          });
        },

        'vue-loader': (vue) => {
          findLoaders(vue.options.loaders.stylus, 'stylus-loader', (stylus) => {
            stylus.options = {
              import: [path.resolve('./assets/stylus/helpers/variables.styl')],
              sourceMap: false
            };
          });
        }
      });
    }
  },

  css: [
    { src: '@/assets/stylus/app.styl', lang: 'stylus' }
  ],

  serverMiddleware: ['~/server/index.js'],

  generate: { subFolders: false }
}

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

const common = merge([
  {
    entry: {
      app: PATHS.app,
    },
    output: {
      path: PATHS.build,
      filename: '[name].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Webpack demo',
      }),
    ],
  },
]);

module.exports = (env) => {
  if (env === 'production') {
    return merge([
      common,
      parts.lintJavaScript({paths: PATHS.app}),
    ]);
  }

  return merge([
    common,
    {
      plugins: [
      new webpack.NamedModulesPlugin(), ],
    },
    parts.devServer({
      // Customize host/port here if needed
      host: process.env.HOST,
      port: process.env.PORT,
    }),
    parts.lintJavaScript({
      paths: PATHS.app,
      options: {
        emitWarning: true,
      },
    }),
  ]);
};

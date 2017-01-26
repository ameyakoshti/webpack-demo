const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.devServer = function(options) {
  return {
    devServer: {
      historyApiFallback: true,
      hot: true,
      hotOnly: true,
      stats: 'errors-only',
      host: options.host,
      port: options.port,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({
      }),
    ],
  };
};

exports.loadCSS = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include: paths,
          use: ['style-loader', 'css-loader?modules'],
        },
      ],
     },
   };
};

exports.extractCSS = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include: paths,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: 'css-loader',
          }),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin('[name].css'),
    ],
  };
};

exports.lintJavaScript = function({paths, options}) {
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          include: paths,
          enforce: 'pre',
          loader: 'eslint-loader',
          options: options,
        },
      ],
    },
  };
};

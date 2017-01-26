const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack-plugin');

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

exports.purifyCSS = function(paths) {
  paths = Array.isArray(paths) ? paths : [paths];

  return {
    plugins: [
      new PurifyCSSPlugin({
        basePath: '/',
        paths: paths.map(path => `${path}/*`),
        resolveExtensions: ['.html'],
      }),
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

exports.lintCSS = function(paths, rules) {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include: paths,
          enforce: 'pre',
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: function () {
              return [
                require('stylelint')({
                  rules: rules,
                }),
              ];
            },
          },
        },
      ],
    },
  };
};

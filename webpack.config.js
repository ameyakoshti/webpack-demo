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
  parts.lintCSS(
    PATHS.app,
    {
      'color-hex-case': 'lower',
    }
  ),
]);

module.exports = (env) => {
  if (env === 'production') {
    return merge([
      common,
      {
        output: {
          // Tweak this to match your GitHub project name
          publicPath: '/webpack-demo/',
        },
      },
      parts.clean(PATHS.build),
      parts.loadJavaScript(PATHS.app),
      parts.minifyJavaScript({ useSourceMap: true }),
      parts.extractBundles([
        {
          name: 'vendor',
          entries: ['react'],
        },
      ]),
      parts.generateSourcemaps('source-map'),
      parts.extractCSS(),
      parts.purifyCSS(PATHS.app),
      parts.lintJavaScript({paths: PATHS.app}),
    ]);
  }

  return merge([
    common,
    parts.generateSourcemaps('eval-source-map'),
    {
      plugins: [
        new webpack.NamedModulesPlugin(),
      ],
    },
    parts.loadCSS(),
    parts.devServer({
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

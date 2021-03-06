var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,  //path to current folder
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      applicationStyles: 'app/styles/app.scss',
      Countdown: 'app/components/Countdown.jsx',
      Timer: 'app/components/Timer.jsx',
      Clock: 'app/components/Clock.jsx',
      CountdownForm: 'app/components/CountdownForm.jsx',
      Controls: 'app/components/Controls.jsx'
    },
    extensions: ['', '.js', '.jsx']  //what possible extensions we want to find
  },
  module: {    // We're using dependency from package.json - 'babel-loader' to convert jsx into es5
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']  // We're telling babel-loader to take our files, parse them through 'react', get the o/p & then run them through es2015 as well
        },
        test: /\.jsx?$/,   // Any file which has .jsx extension will be taken by babel-loader
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};

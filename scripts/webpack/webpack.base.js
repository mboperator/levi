import { fromJS } from 'immutable';
import { path as rootPath } from 'app-root-path';

export default fromJS({

  context: rootPath,

  entry: {
    web: './src/web/app',
  },

  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },

  resolve: {
    modulesDirectories: [
      '_shared',
      'node_modules',
    ],
    extensions: ['', '.js', '.jsx', '.json', '.css', '.sass', '.scss'],
  },

  node: {
    process: true,
  },

});

const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

// our packages that will now be included in the CRA build step
const appIncludes = [resolveApp('src'), resolveApp('../components/src')]

module.exports = {
  webpack: function override(config, env) {
    // allow importing from outside of src folder
    config.resolve.plugins = config.resolve.plugins.filter(
      (plugin) => plugin.constructor.name !== 'ModuleScopePlugin',
    )

    config.module.rules[0].include = appIncludes
    config.module.rules[1].oneOf[2].include = appIncludes
    config.module.rules[1].oneOf[2].options.plugins.push(
      require.resolve('babel-plugin-react-native-web'),
    )

    config.plugins.push(
      new webpack.DefinePlugin({ __DEV__: env !== 'production' }),
    )

    config.devtool = 'eval-source-map';

    config.module.rules.push({
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          // Disable reading babel configuration
          babelrc: false,
          configFile: false,

          // The configration for compilation
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-flow'
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-object-rest-spread'
          ]
        }
      }
    })

    const webAliases = {
      // 'react-native': path.resolve('web/aliases/react-native'),
      'react-native': 'react-native-web',
      'react-native-maps': 'react-native-web-maps'
    };
    Object.assign(config.resolve.alias, webAliases);

    return config;
  },
  // paths: function (paths, env) {
  //   paths.appIndexJs = path.resolve('index.web.js');
  //   paths.appSrc = path.resolve('.');
  //   paths.moduleFileExtensions.push('ios.js');
  //   return paths;
  // },
};

const path = require('path');
const webpack = require('webpack');

module.exports = {
  title: 'SweetieKit React',
  styleguideDir: 'docs',
  components: 'src/sweetiekit/components/**/component.js',
  getComponentPathLine(componentPath) {
    const dir = path.dirname(componentPath);
    const parts = dir.split('/');
    const componentName = parts[parts.length - 1];
    parts.pop();
    return `import { ${componentName} } from '${parts.join('/')}';`;
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-proposal-class-properties'
            ],
            presets: [
              [
                "@babel/preset-env",
                {
                  "modules": false
                }
              ],
              "@babel/preset-react"
            ],
            babelrc: false,
          },
          exclude: [/node_modules/],
        }
      ]
    },
    resolve: {
      extensions: [
        '.js',
        '.jsx'
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        NSTextAlignmentLeft: JSON.stringify(0),
      }),
    ],
  },
};

const path = require('path');

module.exports = {
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
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
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
              "@babel/preset-react",
              "@babel/preset-flow"
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
  },
};

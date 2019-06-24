const path = require('path');

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
};

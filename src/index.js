import React from 'react';

if (typeof Require === 'undefined') {
  global.Require = function (str) {
    console.log('Require', str);
  };
}

const SweetieKit = Require('std:sweetiekit.node');

import loadRenderer from './sweetiekit/renderers';

import App from './demo/App';

function render() {
  loadRenderer(global.__PLATFORM__).then((module) => {
    const { render: Render } = module.default;

    if (global.__PLATFORM__ === 'ios') {
      const { UIApplication, UIViewController } = SweetieKit;

      const app = new UIApplication();
      const rootVC = new UIViewController();
      app.keyWindow.setRootViewController(rootVC);

      Render(<App frame={rootVC.view.frame} />, rootVC);
    } else {
      const root = document.getElementById('app');
      console.log(root);
      Render(<App frame={{ x: 0, y: 0, width: 100, height: 100 }} />, root);
    }
  });
}

render();
if (module.hot) {
  module.hot.accept('./demo/App', () => { render(); });
}

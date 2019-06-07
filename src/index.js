import React from 'react';

if (typeof Require === 'undefined') {
  global.Require = function (str) {
    console.log('Require', str);
  };
}

const SweetieKit = Require('std:sweetiekit.node');

import loadRenderer from './sweetiekit/renderers';

import App from './demo/App';

let platformRender;
let app;
let rootVC;
let root;

function render() {
  if (platformRender) {
    if (global.__PLATFORM__ === 'ios') {
      platformRender(<App frame={rootVC.view.frame} />, rootVC);
    } else {
      platformRender(<App frame={{ x: 0, y: 0, width: 100, height: 100 }} />, root);
    }
  } else {
    loadRenderer(global.__PLATFORM__).then((module) => {
      const { render: Render } = module.default;

      platformRender = Render;

      if (global.__PLATFORM__ === 'ios') {
        const { UIApplication, UIViewController } = SweetieKit;

        app = new UIApplication();
        rootVC = new UIViewController();
        app.keyWindow.setRootViewController(rootVC);

        Render(<App frame={rootVC.view.frame} />, rootVC);
      } else {
        root = document.getElementById('app');
        console.log(root);
        Render(<App frame={{ x: 0, y: 0, width: 100, height: 100 }} />, root);
      }
    });
  }
}

render();
if (module.hot) {
  module.hot.accept('./demo/App', () => { render(); });
}

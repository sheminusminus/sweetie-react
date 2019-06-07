import React from 'react';
const SweetieKit = Require('std:sweetiekit.node');

import { iOSRenderer } from './sweetiekit/renderers';

import App from './demo/App';


const { UIApplication, UIViewController } = SweetieKit;

const app = new UIApplication();
const rootVC = new UIViewController();
app.keyWindow.setRootViewController(rootVC);

function render() {
  if (global.__PLATFORM__ === 'ios') {
    iOSRenderer.render(<App frame={rootVC.view.frame} />, rootVC);
  } else {
    // WebRenderer.render(<App frame={rootVC.view.frame} />, rootVC);
  }
}

render();
if (module.hot) {
  module.hot.accept('./demo/App', () => { render(); });
}

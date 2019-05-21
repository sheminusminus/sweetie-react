import React from 'react';
const SweetieKit = Require('std:sweetiekit.node');

import ReactDOM from './sweetiekit/renderer';

const {
  UIApplication,
  UILabel,
  UIView,
  UIViewController,
} = SweetieKit;

import App from './App';


const app = new UIApplication();
const rootVC = new UIViewController();
app.keyWindow.setRootViewController(rootVC);

function render() {
  // var mountNode = document.getElementById('app');
  ReactDOM.render(<App frame={rootVC.view.frame} />, rootVC.view);
}

render();
if (module.hot) {
  module.hot.accept('./App', () => { render(); });
}

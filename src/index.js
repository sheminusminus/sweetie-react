import React from 'react';
// noinspection JSUnresolvedVariable
global.Require = global.Require || (() => {});
// noinspection JSUnresolvedFunction
const SweetieKit = Require('std:sweetiekit.node');

import ReactDOM from './sweetiekit/renderer';

import App from './demo/App';


const { UIApplication, UIViewController } = SweetieKit;

const app = new UIApplication();
const rootVC = UIViewController();
app.keyWindow.rootViewController = rootVC;

function render() {
  // var mountNode = document.getElementById('app');
  ReactDOM.render(<App frame={rootVC.view.frame} />, rootVC);
}

render();
if (module.hot) {
  module.hot.accept('./kitDemo/index.js', () => { render(); });
}

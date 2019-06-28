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

const myApp = <App frame={rootVC.view.frame} />;

function render() {
  // var mountNode = document.getElementById('app');
  ReactDOM.render(myApp, rootVC);
}

render();
if (module.hot) {
  module.hot.accept('./demo/App.js', () => { render(); });
}

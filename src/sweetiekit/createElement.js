const SweetieKit = Require('std:sweetiekit.node');

import { UIControlState } from './enums';
import colors from './colors';

const {
  UIViewController,
  UILabel,
  UIView,
  UIButton,
} = SweetieKit;

export const viewController = (props) => {
  return new UIViewController();
};

export const view = (props) => {
  let el;

  if (props.frame) {
    el = new UIView(props.frame);
  } else {
    el = new UIView();
  }

  if (props.backgroundColor) {
    el.backgroundColor = props.backgroundColor;
  } else {
    el.backgroundColor = colors.white;
  }

  return el;
};

export const label = (props) => {
  const el = new UILabel();
  if (props.text) {
    el.text = text;
  }
  el.sizeToFit();
  return el;
};

export const button = (props) => {
  let el;

  if (props.frame) {
    el = new UIButton(props.frame);
  } else {
    el = new UIButton();
  }

  if (props.title) {
    el.setTitleForState(props.title, UIControlState.normal);
  }

  return el;
};

export const defaultType = () => undefined;

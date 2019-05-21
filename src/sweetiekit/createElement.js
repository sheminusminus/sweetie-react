const SweetieKit = Require('std:sweetiekit.node');

import { UIControlState, UIControlEvents } from './enums';
import colors from './colors';
import {
  viewAttrs,
  viewDefaults,
  layerDefaults,
  layerAttrs,
} from './properties';


const {
  UIViewController,
  UILabel,
  UIView,
  UIButton,
} = SweetieKit;

function set(el, props, attr, def) {
  if (el && props) {
    if (props[attr]) {
      el[attr] = props[attr];
    } else if (def) {
      el[attr] = def;
    }
  }
}

function setViewBaseProps(el, props) {
  el.translatesAutoresizingMaskIntoConstraints = false;
  viewAttrs.forEach(a => set(el, props, a, viewDefaults[a]));
  if (props.layer) {
    layerAttrs.forEach(a => set(el.layer, props.layer, a, layerDefaults[a]));
  }
}

export const viewController = (props) => {
  return new UIViewController();
};

export const view = (props) => {
  const el = new UIView();

  setViewBaseProps(el, props);

  return el;
};

export const label = (props) => {
  const el = new UILabel();

  setViewBaseProps(el, props);

  el.text = props.text || '';
  el.sizeToFit();

  return el;
};

export const button = (props) => {
  const el = new UIButton();

  setViewBaseProps(el, props);

  el.setTitleForState(props.title || '', UIControlState.normal);
  el.setTitleColorForState(props.titleColor || colors.black, UIControlState.normal);
  if (props.target) {
    el.addTarget(props.target[0], UIControlEvents.touchUpInside[1]);
  }

  return el;
};

export const defaultType = () => undefined;

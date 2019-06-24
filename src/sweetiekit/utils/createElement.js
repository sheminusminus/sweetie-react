const SweetieKit = Require('std:sweetiekit.node');

import * as colors from './colors';
import {
  viewAttrs,
  viewDefaults,
  layerDefaults,
  layerAttrs,
  textViewAttrs,
  textViewDefaults,
} from './properties';

const {
  UIButton,
  UIImageView,
  UILabel,
  UIScrollView,
  UISegmentedControl,
  UISlider,
  UIStackView,
  UISwitch,
  UITabBarController,
  UITapGestureRecognizer,
  UITextField,
  UIView,
  UIViewController,
} = SweetieKit;

function set(el, props, attr, def) {
  if (el && props) {
    if (props[attr] !== undefined) {
      el[attr] = props[attr];
    } else if (def) {
      el[attr] = def;
    }
  }
}

function setTextViewBaseProps(el, props) {
  textViewAttrs.forEach(a => set(el, props, a, textViewDefaults[a]));
}

function setViewBaseProps(el, props) {
  viewAttrs.forEach(a => set(el, props, a, viewDefaults[a]));
  if (props.layer) {
    layerAttrs.forEach(a => set(el.layer, props.layer, a, layerDefaults[a]));
  }
}

export const viewController = (props) => {
  return new UIViewController();
};

export const view = (props) => {
  const el = UIView();

  el.translatesAutoresizingMaskIntoConstraints = false;

  setViewBaseProps(el, props);

  return el;
};

export const label = (props) => {
  const el = UILabel();

  el.translatesAutoresizingMaskIntoConstraints = false;
  el.text = props.children || '';
  el.sizeToFit();

  setViewBaseProps(el, props);
  setTextViewBaseProps(el, props);

  return el;
};

export const button = (props) => {
  const el = UIButton();

  el.translatesAutoresizingMaskIntoConstraints = false;

  setViewBaseProps(el, props);

  el.setTitleForState(props.title || '', UIControlStateNormal);
  el.setTitleColorForState(props.titleColor || colors.black, UIControlStateNormal);

  if (props.titleLabel) {
    setTextViewBaseProps(el.titleLabel, props.titleLabel);
  }

  return el;
};

export const textField = (props) => {
  const el = UITextField();

  el.translatesAutoresizingMaskIntoConstraints = false;

  setViewBaseProps(el, props);

  el.text = props.text || '';
  el.placeholder = props.placeholder || '';

  return el;
};

export const scrollView = (props) => {
  const el = UIScrollView();

  el.translatesAutoresizingMaskIntoConstraints = false;

  setViewBaseProps(el, props);

  return el;
};

export const tapGestureRecognizer = (props) => {
  return UITapGestureRecognizer();
};

export const imageView = (props) => {
  const { image, ...rest } = props;

  const el = UIImageView();

  el.translatesAutoresizingMaskIntoConstraints = false;

  setViewBaseProps(el, rest);

  return el;
};

export const uiSwitch = (props) => {
  const el = UISwitch();

  el.translatesAutoresizingMaskIntoConstraints = false;

  setViewBaseProps(el, props);

  return el;
};

export const slider = (props) => {
  const el = UISlider();

  el.translatesAutoresizingMaskIntoConstraints = false;

  setViewBaseProps(el, props);

  return el;
};

export const segmentedControl = (props) => {
  let el = UISegmentedControl();

  if (props.items && props.items.length) {
    if (typeof props.items[0].title === 'string') {
      const titles = props.items.map(item => item.title || '');
      el = el.initWithItems(titles);
    } else if (typeof props.items[0].image) {
      const images = props.items.map(item => item.image);
      el = el.initWithItems(images);
    }
    props.items.forEach((item, idx) => {
      if (item.enabled !== undefined) {
        el.setEnabledForSegmentAtIndex(item.enabled, idx);
      }
    });
  }

  el.translatesAutoresizingMaskIntoConstraints = false;

  setViewBaseProps(el, props);

  return el;
};

export const stackView = (props) => {
  const el = UIStackView();

  el.translatesAutoresizingMaskIntoConstraints = false;

  setViewBaseProps(el, props);

  return el;
};

export const tabBarController = (props) => {
  return UITabBarController();
};


export const defaultType = () => undefined;

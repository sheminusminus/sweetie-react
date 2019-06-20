import * as createElement from './createElement';
import * as types from './types';

const createViewController = (
  type,
  props,
  rootContainerInstance,
  hostContext,
  internalInstanceHandle,
) => {
  switch (props.type) {
    case types.viewController:
      return createElement.viewController(props);
    default:
      return createElement.viewController(props);
  }
};

const createView = (
  type,
  props,
  rootContainerInstance,
  hostContext,
  internalInstanceHandle,
) => {
  switch (props.type) {
    case types.button:
      return createElement.button(props);
    case types.imageView:
      return createElement.imageView(props);
    case types.label:
      return createElement.label(props);
    case types.scrollView:
      return createElement.scrollView(props);
    case types.textField:
      return createElement.textField(props);
    case types.uiSwitch:
      return createElement.uiSwitch(props);
    default:
      return createElement.view(props);
  }
};

const createGestureRecognizer = (
  type,
  props,
  rootContainerInstance,
  hostContext,
  internalInstanceHandle,
) => {
  switch (props.type) {
    case types.tapGestureRecognizer:
      return createElement.tapGestureRecognizer(props);
    default:
      return createElement.tapGestureRecognizer(props);
  }
};

const createInstance = (
  type,
  props,
  rootContainerInstance,
  hostContext,
  internalInstanceHandle,
) => {
  switch (type) {
    case types.viewController:
      return createViewController(type, props, rootContainerInstance, hostContext, internalInstanceHandle);
    case types.view:
      return createView(type, props, rootContainerInstance, hostContext, internalInstanceHandle);
    case types.gestureRecognizer:
      return createGestureRecognizer(type, props, rootContainerInstance, hostContext, internalInstanceHandle);
    default:
      return createElement.defaultType();
  }
};

export default createInstance;

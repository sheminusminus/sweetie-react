import * as createElement from './createElement';
import * as types from './types';

const createResponder = (
  type,
  props,
  rootContainerInstance,
  hostContext,
  internalInstanceHandle,
) => {
  switch (props.type) {
    case types.skNode:
      return createElement.skNode(props);
    case types.skScene:
      return createElement.skScene(props);
    case types.skSpriteNode:
      return createElement.skSpriteNode(props);
    default:
      return createElement.responder(props);
  }
};

const createViewController = (
  type,
  props,
  rootContainerInstance,
  hostContext,
  internalInstanceHandle,
) => {
  switch (props.type) {
    case types.tabBarController:
      return createElement.tabBarController(props);
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
    case types.segmentedControl:
      return createElement.segmentedControl(props);
    case types.skView:
      return createElement.skView(props);
    case types.slider:
      return createElement.slider(props);
    case types.stackView:
      return createElement.stackView(props);
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
    case types.gestureRecognizer:
      return createGestureRecognizer(type, props, rootContainerInstance, hostContext, internalInstanceHandle);
    case types.responder:
      return createResponder(type, props, rootContainerInstance, hostContext, internalInstanceHandle);
    case types.viewController:
      return createViewController(type, props, rootContainerInstance, hostContext, internalInstanceHandle);
    case types.view:
      return createView(type, props, rootContainerInstance, hostContext, internalInstanceHandle);
    default:
      return createElement.defaultType();
  }
};

export default createInstance;

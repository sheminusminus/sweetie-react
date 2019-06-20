import * as createElement from './createElement';

const createView = (
  type,
  props,
  rootContainerInstance,
  hostContext,
  internalInstanceHandle,
) => {
  console.log('creating', props.type);
  switch (props.type) {
    case 'ui-button':
      return createElement.button(props);
    case 'ui-image-view':
      return createElement.imageView(props);
    case 'ui-label':
      return createElement.label(props);
    case 'ui-scroll-view':
      return createElement.scrollView(props);
    case 'ui-text-field':
      return createElement.textField(props);
    default:
      return createElement.view(props);
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
    case 'ui-view-controller':
      return createElement.viewController(props);
    case 'ui-view':
      return createView(type, props, rootContainerInstance, hostContext, internalInstanceHandle);
    case 'ui-tap-gesture-recognizer':
      return createElement.tapGestureRecognizer(props);
    default:
      return createElement.defaultType();
  }
};

export default createInstance;

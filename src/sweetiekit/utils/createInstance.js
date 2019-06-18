import * as createElement from './createElement';

const createInstance = (
  type,
    props,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
) => {
  switch (type) {
    case 'ui-view-controller':
      return createElement.viewController(props);
    case 'ui-view':
      return createElement.view(props);
    case 'ui-button':
      return createElement.button(props);
    case 'ui-label':
      return createElement.label(props);
    case 'ui-text-field':
      return createElement.textField(props);
    case 'ui-scroll-view':
      return createElement.scrollView(props);
    default:
      return createElement.defaultType();
  }
};

export default createInstance;

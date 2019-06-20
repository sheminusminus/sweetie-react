import * as is from './is';
import * as propKeys from './propKeys';


export default (
  view,
  type,
  props,
  rootContainerInstance,
  hostContext,
  listeners,
) => {
  const { children, ...otherProps } = props;

  const newListeners = { ...listeners };

  Object.keys(otherProps).forEach(attr => {
    if (attr === propKeys.target && (
      is.view(view)
      || is.textField(view)
    )) {
      const [fn, events] = otherProps[attr];

      newListeners[view.selfAddress] = otherProps[attr];

      view.addTargetActionForControlEvents(fn, events);
    } else if (attr === propKeys.target && is.tapRecognizer(view)) {
      const fn = otherProps[attr];

      const handle = view.addTargetAction(fn);

      newListeners[view.selfAddress] = {
        handle,
        fn,
      };
    } else if (attr === propKeys.title) {
      view.title = otherProps[attr];
    } else if (otherProps[attr]) {
      view[attr] = otherProps[attr];
    }
  });

  return newListeners;
};

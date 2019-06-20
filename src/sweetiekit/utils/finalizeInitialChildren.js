import * as is from './is';


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
    if (attr === 'target' && is.view(view)) {
      const [fn, events] = otherProps[attr];

      newListeners[view.selfAddress] = otherProps[attr];

      view.addTargetActionForControlEvents(fn, events);
    } else if (attr === 'target' && is.tapRecognizer(view)) {
      const fn = otherProps[attr];

      const handle = view.addTargetAction(fn);

      newListeners[view.selfAddress] = {
        handle,
        fn,
      };
    } else if (attr === 'title') {
      view.title = otherProps[attr];
    } else if (otherProps[attr]) {
      view[attr] = otherProps[attr];
    }
  });

  return newListeners;
};

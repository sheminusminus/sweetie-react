import * as is from './is';


export default (
  view,
  type,
  props,
  rootContainerInstance,
  hostContext,
) => {
  const { children, ...otherProps } = props;
  Object.keys(otherProps).forEach(attr => {
    if (attr === 'target' && is.view(view)) {
      const [fn, events] = otherProps[attr];

      if (view.__eventListeners) {
        view.__eventListeners.push([fn, events]);
      } else {
        view.__eventListeners = [[fn, events]];
      }

      view.addTargetActionForControlEvents(fn, events);
    } else if (attr === 'target' && is.tapRecognizer(view)) {
      const fn = otherProps[attr];
      const handle = view.addTargetAction(fn);
      const obj = {
        handle,
        fn,
      };

      if (view.__eventListeners) {
        view.__eventListeners.push(obj);
      } else {
        view.__eventListeners = [obj];
      }
    } else if (attr === 'title') {
      view.title = otherProps[attr];
    } else if (otherProps[attr]) {
      view[attr] = otherProps[attr];
    }
  });
};

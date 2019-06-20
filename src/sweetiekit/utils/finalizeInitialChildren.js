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
    const val = otherProps[attr];

    if (attr === propKeys.target && (
      is.view(view)
      || is.textField(view)
    )) {
      const [fn, events] = val;

      newListeners[view.selfAddress] = val;

      view.addTargetActionForControlEvents(fn, events);
    } else if (attr === propKeys.target && is.tapRecognizer(view)) {
      const handle = view.addTargetAction(val);

      newListeners[view.selfAddress] = {
        handle,
        fn: val,
      };
    } else if (attr === propKeys.title) {
      view.title = val;
    } else if (is.navController(view) && attr === propKeys.viewControllers) {
      view.setViewControllers(val, true);
    } else if (otherProps[attr]) {
      view[attr] = val;
    }
  });

  return newListeners;
};

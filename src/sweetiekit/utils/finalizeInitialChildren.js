import * as is from './is';
import * as propKeys from './propKeys';
import * as types from './types';


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

    if (
      attr === propKeys.target
      && Array.isArray(props.baseTypes)
      && props.baseTypes.includes(types.control)
    ) {
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
    } else if (props.type === types.imageView && attr === propKeys.image) {
      if (val) view.image = val;
    } else if (
      attr === propKeys.layer
      && Array.isArray(props.baseTypes)
      && props.baseTypes.includes(types.view)
    ) {
      Object.keys(val).forEach(p => view.layer[p] = val[p]);
    } else if (otherProps[attr]) {
      view[attr] = val;
    }
  });

  return newListeners;
};

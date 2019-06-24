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
  const { baseTypes, children, type: viewType, ...otherProps } = props;

  const newListeners = { ...listeners };

  const baseTypesIsArray = Array.isArray(baseTypes);

  Object.keys(otherProps).forEach(attr => {
    const val = otherProps[attr];

    if (val) {
      switch (attr) {
        case propKeys.target:
          if (baseTypesIsArray) {
            if (baseTypes.includes(types.control)) {
              const [fn, events] = val;

              newListeners[view.selfAddress] = val;

              view.addTargetActionForControlEvents(fn, events);
            } else if (baseTypes.includes(types.gestureRecognizer)) {
              const handle = view.addTargetAction(val);

              newListeners[view.selfAddress] = {
                handle,
                fn: val,
              };
            }
          }
          break;

        case propKeys.title:
          view.title = val;
          break;

        case propKeys.image:
          if (val) view.image = val;
          break;

        case propKeys.layer:
          if (baseTypesIsArray) {
            if (baseTypes.includes(types.view)) {
              Object.keys(val).forEach(p => view.layer[p] = val[p]);
            }
          }
          break;

        case propKeys.text:
          view.text = val;
          break;

        default:
          view[attr] = val;
          break;
      }
    }
  });

  return newListeners;
};

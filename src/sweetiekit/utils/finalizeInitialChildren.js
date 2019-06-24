import _cloneDeep from 'lodash/cloneDeep';

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

  if (view) {
    Object.keys(otherProps).forEach(attr => {
      const val = otherProps[attr];

      if (val !== undefined && val !== null) {
        switch (attr) {
          case propKeys.target:
            if (baseTypesIsArray) {
              if (baseTypes.includes(types.control)) {
                const [fn, events] = val;

                if (newListeners[view.selfAddress] && newListeners[view.selfAddress].length) {
                  view.removeTargetActionForControlEvents(newListeners[view.selfAddress][1]);
                  delete newListeners[view.selfAddress];
                }

                newListeners[view.selfAddress] = val;

                view.addTargetActionForControlEvents(fn, events);
              } else if (baseTypes.includes(types.gestureRecognizer)) {
                if (newListeners[view.selfAddress] && newListeners[view.selfAddress].handle) {
                  view.removeTargetAction(newListeners[view.selfAddress].handle);
                  delete newListeners[selfAddress];
                }

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

          case propKeys.tabBar:
            if (viewType === types.tabBarController) {
              Object.keys(val).forEach(p => view.tabBar[p] = val[p]);
            }
            break;

          case propKeys.selectedIndex:
            if (viewType === types.tabBarController) {
              console.log('tab bar controller setting selected view controller');
              const ctrl = view.viewControllers[val];
              if (ctrl) {
                view.selectedViewController = ctrl;
              }
            }
            break;

          default:
            view[attr] = val;
            break;
        }
      }
    });
  }

  return newListeners;
};

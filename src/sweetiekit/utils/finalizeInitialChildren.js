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
        if (propKeys.objectProps.includes(attr)) {
          Object.keys(val).forEach(p => view[attr][p] = val[p]);
        } else {
          switch (attr) {
            case propKeys.target:
              if (baseTypesIsArray) {
                if (baseTypes.includes(types.control)) {
                  const memKey = JSON.stringify(view.selfAddress);

                  const [fn, events] = val;

                  if (newListeners[memKey] && newListeners[memKey].length) {
                    view.removeTargetActionForControlEvents(newListeners[memKey][1]);
                    delete newListeners[memKey];
                  }

                  newListeners[memKey] = val;

                  view.addTargetActionForControlEvents(fn, events);
                } else if (baseTypes.includes(types.gestureRecognizer)) {
                  const memKey = JSON.stringify(view.selfAddress);

                  console.log('finalize initial children, set gest recog target', memKey);

                  if (newListeners[memKey] && newListeners[memKey].handle) {
                    view.removeTargetAction(newListeners[memKey].handle);
                    delete newListeners[memKey];
                  }

                  const handle = view.addTargetAction(val);

                  newListeners[memKey] = {
                    handle,
                    fn: val,
                  };
                }
              }
              break;

            default:
              view[attr] = val;
              break;
          }
        }
      }
    });
  }

  return newListeners;
};

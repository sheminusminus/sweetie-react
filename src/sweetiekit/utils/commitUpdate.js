import _cloneDeep from 'lodash/cloneDeep'

import * as propKeys from './propKeys';
import * as types from './types';

export default (
  view,
  updatePayload,
  type,
  oldProps,
  newProps,
  internalInstanceHandle,
  listeners,
) => {
  const { baseTypes, type: viewType } = newProps;

  const newListeners = _cloneDeep(listeners);

  const baseTypesIsArray = Array.isArray(baseTypes);

  updatePayload.forEach(update => {
    Object.keys(update).forEach(key => {
      const val = update[key];

      if (val !== undefined && val !== null) {
        switch (key) {
          case propKeys.target:
            if (baseTypesIsArray) {
              if (baseTypes.includes(types.control)) {
                const existingListener = newListeners[view.selfAddress];

                if (Array.isArray(existingListener)) {
                  delete newListeners[view.selfAddress];
                  view.removeTargetActionForControlEvents(existingListener[1]);
                }

                view.addTargetActionForControlEvents(val[0], val[1]);

                newListeners[view.selfAddress] = val;
              } else if (baseTypes.includes(types.gestureRecognizer)) {
                // for now we only allow one target per recognizer
                const existingListener = newListeners[view.selfAddress];

                if (existingListener && existingListener.handle) {
                  delete newListeners[view.selfAddress];
                  view.removeTargetAction(existingListener.handle);
                }

                const handle = view.addTargetAction(val);

                newListeners[view.selfAddress] = {
                  fn: val,
                  handle,
                };
              }
            }
            break;

          case propKeys.title:
            if (viewType === types.button) {
              view.setTitleForState(val, UIControlStateNormal);
            }
            break;

          case propKeys.text:
            if (viewType === types.textField || viewType === types.label) {
              view.text = val;
            }
            break;

          case propKeys.titleColor:
            if (viewType === types.button) {
              view.setTitleColorForState(val, UIControlStateNormal);
            }
            break;

          case propKeys.layer:
            if (baseTypesIsArray) {
              if (baseTypes.includes(types.view)) {
                Object.keys(val).forEach(p => view.layer[p] = val[p]);
              }
            }
            break;

          case propKeys.titleLabel:
            if (viewType === types.button) {
              Object.keys(val).forEach(p => view.titleLabel[p] = val[p]);
            }
            break;

          case propKeys.image:
            if (viewType === types.imageView) {
              if (val) view.image = val;
            }
            break;

          case propKeys.items:
            if (viewType === types.segmentedControl) {
              view.removeAllSegments();
              if (val.length) {
                if (val[0].title) {
                  val.forEach((item, idx) => {
                    view.insertSegmentWithTitleAtIndexAnimated(item.title, idx, false);
                  });
                } else if (val[0].image) {
                  val.forEach((item, idx) => {
                    view.insertSegmentWithImageAtIndexAnimated(item.image, idx, false);
                  });
                }
              }
            }
            break;

          case propKeys.tabBar:
            if (viewType === types.tabBarController) {
              Object.keys(val).forEach(p => view.tabBar[p] = val[p]);
            }
            break;

          case propKeys.selectedIndex:
            if (viewType === types.tabBarController) {
              view.selectedIndex = val;
            }
            break;

          default:
            view[key] = val;
            break;
        }
      }
    });
  });

  return newListeners;
};

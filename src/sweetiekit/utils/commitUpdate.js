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

  const newListeners = { ...listeners };

  const baseTypesIsArray = Array.isArray(baseTypes);

  if (view) {
    updatePayload.forEach(update => {
      Object.keys(update).forEach(key => {
        const val = update[key];

        if (val !== undefined && val !== null) {
          switch (key) {
            case propKeys.target:
              if (baseTypesIsArray) {
                if (baseTypes.includes(types.control)) {
                  const memKey = JSON.stringify(view.selfAddress);

                  const existingListener = newListeners[memKey];

                  if (Array.isArray(existingListener)) {
                    delete newListeners[memKey];
                    view.removeTargetActionForControlEvents(existingListener[1]);
                  }

                  view.addTargetActionForControlEvents(val[0], val[1]);

                  newListeners[memKey] = val;
                } else if (baseTypes.includes(types.gestureRecognizer)) {
                  const memKey = JSON.stringify(view.selfAddress);

                  // for now we only allow one target per recognizer
                  const existingListener = newListeners[memKey];

                  if (existingListener && existingListener.handle) {
                    view.removeTargetAction(existingListener.handle);
                    delete newListeners[memKey];
                  }

                  const handle = view.addTargetAction(val);

                  newListeners[memKey] = {
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
                const ctrl = view.viewControllers[val];

                if (ctrl) {
                  view.selectedViewController = ctrl;
                }
              }
              break;

            default:
              view[key] = val;
              break;
          }
        }
      });
    });
  }

  return newListeners;
};

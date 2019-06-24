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

  updatePayload.forEach(update => {
    Object.keys(update).forEach(key => {
      const val = update[key];

      if (val) {
        switch (key) {
          case propKeys.target:
            if (baseTypesIsArray) {
              if (baseTypes.includes(types.control)) {
                const existingListener = newListeners[view.selfAddress];

                if (Array.isArray(existingListener)) {
                  view.removeTargetActionForControlEvents(existingListener[1]);
                }

                newListeners[view.selfAddress] = val;

                view.addTargetActionForControlEvents(val[0], val[1]);
              } else if (baseTypes.includes(types.gestureRecognizer)) {
                // for now we only allow one target per recognizer
                const existingListener = newListeners[view.selfAddress];

                if (existingListener && existingListener.handle) {
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
                const layerProps = val;
                Object.keys(layerProps).forEach(p => view.layer[p] = layerProps[p]);
              }
            }
            break;

          case propKeys.titleLabel:
            if (viewType === types.button) {
              const labelProps = val;
              Object.keys(labelProps).forEach(p => view.titleLabel[p] = labelProps[p]);
            }
            break;

          case propKeys.image:
            if (viewType === types.imageView) {
              if (val) view.image = val;
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

import * as is from './is';
import * as propKeys from './propKeys';


export default (
  view,
  updatePayload,
  type,
  oldProps,
  newProps,
  internalInstanceHandle,
  listeners,
) => {
  const newListeners = { ...listeners };

  updatePayload.forEach(update => {
    Object.keys(update).forEach(key => {
      const val = update[key];

      if (key === propKeys.target && (
        is.view(view)
        || is.textField(view)
      )) {
        // for now we only allow one target per view
        const existingListener = newListeners[view.selfAddress];

        if (Array.isArray(existingListener)) {
          view.removeTargetActionForControlEvents(existingListener[1]);
        }

        newListeners[view.selfAddress] = val;

        view.addTargetActionForControlEvents(val[0], val[1]);
      } else if (key === propKeys.target && is.tapRecognizer(view)) {
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
      } else if (key === propKeys.title && view.setTitleForState) {
        view.setTitleForState(val, UIControlStateNormal);
      } else if (key === propKeys.titleColor && view.setTitleColorForState) {
        view.setTitleColorForState(val, UIControlStateNormal);
      } else if (key === propKeys.layer && view.layer) {
        const layerProps = val;
        Object.keys(layerProps).forEach(p => view.layer[p] = layerProps[p]);
      } else if (key === propKeys.titleLabel && view.titleLabel) {
        const labelProps = val;
        Object.keys(labelProps).forEach(p => view.titleLabel[p] = labelProps[p]);
      } else {
        view[key] = val;
      }
    });
  });

  return newListeners;
};

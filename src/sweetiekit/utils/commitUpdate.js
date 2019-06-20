import * as is from './is';


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
      if (key === 'target' && is.view(view)) {
        // for now we only allow one target per view
        const existingListener = newListeners[view.selfAddress];

        if (Array.isArray(existingListener)) {
          view.removeTargetActionForControlEvents(existingListener[1]);
        }

        newListeners[view.selfAddress] = update[key];

        view.addTargetActionForControlEvents(update[key][0], update[key][1]);
      } else if (key === 'target' && is.tapRecognizer(view)) {
        if (view.__eventListeners) {
          // for now we only allow one target per recognizer
          const existingListener = newListeners[view.selfAddress];

          if (existingListener && existingListener.handle) {
            view.removeTargetAction(existingListener.handle);
          }

          const fn = update[key];
          const handle = view.addTargetAction(fn);

          newListeners[view.selfAddress] = {
            fn,
            handle,
          };
        }
      } else if (key === 'title' && view.setTitleForState) {
        view.setTitleForState(update[key], UIControlStateNormal);
      } else if (key === 'titleColor' && view.setTitleColorForState) {
        view.setTitleColorForState(update[key], UIControlStateNormal);
      } else if (key === 'layer' && view.layer) {
        const layerProps = update[key];
        Object.keys(layerProps).forEach(p => view.layer[p] = layerProps[p]);
      } else if (key === 'titleLabel' && view.titleLabel) {
        const labelProps = update[key];
        Object.keys(labelProps).forEach(p => view.titleLabel[p] = labelProps[p]);
      } else {
        view[key] = update[key];
      }
    });
  });

  return newListeners;
};

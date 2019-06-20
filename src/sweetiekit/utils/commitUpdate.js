import * as is from './is';


export default (
  view,
  updatePayload,
  type,
  oldProps,
  newProps,
  internalInstanceHandle,
) => {
  updatePayload.forEach(update => {
    Object.keys(update).forEach(key => {
      if (key === 'target' && is.view(view)) {
        // for now we only allow one target per view
        view.__eventListeners.forEach(pair => { // To prevent leak
          view.removeTargetActionForControlEvents(pair[1]);
        });
        view.__eventListeners = [ update[key] ];
        view.addTargetActionForControlEvents(update[key][0], update[key][1]);
      } else if (key === 'target' && is.tapRecognizer(view)) {
        if (view.__eventListeners) {
          // for now we only allow one target per recognizer
          view.__eventListeners.forEach(({ handle }) => {
            view.removeTargetAction(handle);
          });
          const fn = update[key];
          const handle = view.addTargetAction(fn);
          view.__eventListeners = [{ fn, handle }];
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
};

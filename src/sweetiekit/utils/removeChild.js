import * as is from './is';


export default (parent, child, listeners) => {
  let removed = true;

  if (is.stackView(parent) && is.view(child)) {
    parent.removeArrangedSubview(child);
  } if (is.view(child)) {
    child.removeFromSuperview();
  } else if (is.viewController(child)) {
    child.dismissViewControllerAnimatedCompletion(true, () => {});
  } else if (is.view(parent) && is.tapRecognizer(child)) {
    parent.removeGestureRecognizer(child);
  } else {
    removed = false;
  }

  if (removed) {
    const newListeners = { ...listeners };
    delete newListeners[child.selfAddress];
    return newListeners;
  }

  return listeners;
};

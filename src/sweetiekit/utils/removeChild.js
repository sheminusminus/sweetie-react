import * as is from './is';


export default (parent, child, listeners) => {
  let removed = true;

  if (is.tabBarController(parent) && is.viewController(child)) {
    const ctrls = Array.from(parent.viewControllers || []);
    const idx = ctrls.indexOf(child);
    const newCtrls = ctrls.splice(idx, 1);

    let newSelectedIndex = parent.selectedIndex;
    if (parent.selectedIndex > newCtrls.length - 1) {
      newSelectedIndex = newCtrls.length - 1;
    }
    parent.selectedIndex = newSelectedIndex;

    parent.setViewControllers(newCtrls);
  } else if (is.view(parent) && is.tapRecognizer(child)) {
    parent.removeGestureRecognizer(child);
  } else if (is.stackView(parent) && is.view(child)) {
    parent.removeArrangedSubview(child);
  } if (is.view(child)) {
    child.removeFromSuperview();
  } else if (is.viewController(child)) {
    child.dismissViewControllerAnimatedCompletion(true, () => {});
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

import * as is from './is';


export default (parent, child) => {
  if (is.view(child)) {
    child.removeFromSuperview();
  } else if (is.navController(parent)) {
    // TODO: pop to child view controller
    parent.popViewController();
  } else if (is.viewController(child)) {
    child.dismissViewControllerAnimatedCompletion(true, () => {});
  } else if (is.view(parent) && is.tapRecognizer(child)) {
    parent.removeGestureRecognizer(child);
  }
};

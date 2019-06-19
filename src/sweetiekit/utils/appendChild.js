import * as is from './is';


export default (parent, child) => {
  if (is.view(parent) && is.view(child)) {
    parent.addSubview(child);
  } else if (parent && is.view(parent.view) && is.view(child)) {
    parent.view.addSubview(child);
  } else if (is.viewController(parent) && is.viewController(child)) {
    parent.presentViewControllerAnimatedCompletion(child, true, () => {});
  } else if (is.navController(parent) && is.viewController(child)) {
    parent.pushViewController(child);
  } else if (is.view(parent) && is.tapRecognizer(child)) {
    parent.addGestureRecognizer(child);
  }
};

export default (parent, child) => {
  if (parent.addSubview && child.addSubview) {
    parent.addSubview(child);
  } else if (parent.view && parent.view.addSubview && child.addSubview) {
    parent.view.addSubview(child);
  } else if (parent.presentViewControllerAnimatedCompletion && child.presentViewControllerAnimatedCompletion) {
    parent.presentViewControllerAnimatedCompletion(child, true, () => {});
  } else if (parent.pushViewController && child.present) {
    parent.pushViewController(child);
  }
};

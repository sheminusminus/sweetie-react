export default (parent, child) => {
  if (parent.addSubview && child.addSubview) {
    parent.addSubview(child);
  } else if (parent.view && parent.view.addSubview && child.addSubview) {
    parent.view.addSubview(child);
  } else if (parent.present && child.present) {
    parent.present(child, true, () => {});
  } else if (parent.pushViewController && child.present) {
    parent.pushViewController(child);
  }
};

export default (parent, child) => {
  if (child.removeFromSuperview) {
    child.removeFromSuperview();
  } else if (parent.popViewController) {
    // TODO: pop to child view controller
    parent.popViewController();
  } else if (child.dismiss) {
    child.dismiss(true, () => {});
  }
};

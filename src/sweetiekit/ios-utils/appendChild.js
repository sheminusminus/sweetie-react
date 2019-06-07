export default (parent, child) => {
  if (parent instanceof HTMLElement) {
    parent.appendChild(child);
  } else if (child instanceof Text) {
    child.sweetiekitParent = parent;
    console.log('sweetiekitParent', child.sweetiekitParent, { parent, child });
    parent.text = child.value;
  } else if (parent.addSubview) {
    parent.addSubview(child);
  } else if (parent.view && parent.view.addSubview) {
    parent.view.addSubview(child);
  } else if (parent.present && child.present) {
    parent.present(child, true, () => {});
  } else if (parent.pushViewController && child.present) {
    parent.pushViewController(child);
  }
};

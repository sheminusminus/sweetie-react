import * as is from './is';


export default (parent, child, beforeChild) => {
  if (is.view(parent)) {
    if (is.view(child) && is.view(beforeChild)) {
      parent.insertSubviewBelowSubview(child, beforeChild);
    }
  } else if (parent && is.view(parent.view)) {
    if (is.view(child) && is.view(beforeChild)) {
      parent.view.insertSubviewBelowSubview(child, beforeChild);
    }
  }
};

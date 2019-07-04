import * as is from './is';


export default (parent, child, beforeChild) => {
  if (parent && child) {
    if (is.tabBarController(parent)) {
      if (is.viewController(child) && is.viewController(beforeChild)) {
        const ctrls = parent.viewControllers;
        const idx = ctrls.indexOf(beforeChild);
        const newCtrls = ctrls.splice(idx, 0, child);
        parent.setViewControllers(newCtrls);
      }
    } else if (is.view(parent)) {
      if (is.view(child) && is.view(beforeChild)) {
        parent.insertSubviewBelowSubview(child, beforeChild);
      } else if (is.view(child)) {
        parent.addSubview(child);
      } else if (is.tapRecognizer(child)) {
        view.addGestureRecognizer(child);
      }
    } else if (parent && is.view(parent.view)) {
      if (is.view(child) && is.view(beforeChild)) {
        parent.view.insertSubviewBelowSubview(child, beforeChild);
      }
    } else if (is.skView(parent)) {
      if (is.skScene(child)) {
        parent.presentScene(child);
      }
    } else if (is.skNode(parent) || is.skScene(parent) || is.skSpriteNode(parent)) {
      if (is.skNode(child) || is.skSpriteNode(child)) {
        parent.addChild(child);
      }
    }
  }
};

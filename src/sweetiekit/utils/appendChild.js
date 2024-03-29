import * as is from './is';


export default (parent, child) => {
  if (is.stackView(parent) && is.view(child)) {
    parent.addArrangedSubview(child);
  } else if (is.view(parent) && is.view(child)) {
    parent.addSubview(child);
  } else if (parent && is.view(parent.view) && is.view(child)) {
    parent.view.addSubview(child);
  } else if (is.tabBarController(parent) && is.viewController(child)) {
    const viewControllers = Array.from(parent.viewControllers || []);
    viewControllers.push(child);
    parent.setViewControllersAnimated(viewControllers, false);
  } else if (is.viewController(parent) && is.viewController(child)) {
    parent.presentViewControllerAnimatedCompletion(child, true, () => {});
  } else if (is.view(parent) && is.tapRecognizer(child)) {
    parent.addGestureRecognizer(child);
  } else if (is.skView(parent)) {
    if (is.skScene(child)) {
      parent.presentScene(child);
    }
  } else if (is.skNode(parent) || is.skScene(parent) || is.skSpriteNode(parent)) {
    if (is.skNode(child) || is.skSpriteNode(child)) {
      parent.addChild(child);
    }
  }
};

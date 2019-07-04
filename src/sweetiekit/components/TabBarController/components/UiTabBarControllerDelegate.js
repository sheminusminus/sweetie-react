const SweetieKit = Require('std:sweetiekit.node');

const { UITabBarControllerDelegate } = SweetieKit;

export { UITabBarControllerDelegate };

/**
 * @param {Object} options
 * @returns {UITabBarControllerDelegate}
 */
export default function makeTabBarCtrlDelegate(options = {}) {
  return UITabBarControllerDelegate(options);
}

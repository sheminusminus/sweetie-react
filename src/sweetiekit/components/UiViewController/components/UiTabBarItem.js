const SweetieKit = Require('std:sweetiekit.node');

const { UITabBarItem } = SweetieKit;

export { UITabBarItem };

/**
 * @param {string} title
 * @param {?UIImage} image
 * @param {?UIImage} selectedImage
 * @returns {UITabBarItem}
 */
export default function makeTabBarItem(title, image = undefined, selectedImage = undefined) {
  return UITabBarItem(title, image, selectedImage);
}

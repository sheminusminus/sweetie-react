const SweetieKit = Require('std:sweetiekit.node');

const { UITabBarItem } = SweetieKit;

/**
 * @param {string} title
 * @param {?UIImage} image
 * @param {?UIImage} selectedImage
 * @returns {UITabBarItem}
 */
export default function makeTabBarItem(title, image, selectedImage) {
  return UITabBarItem(title, image, selectedImage);
}

const SweetieKit = Require('std:sweetiekit.node');

const { UITabBarItem } = SweetieKit;

export default function makeTabBarItem(title, image, selectedImage) {
  return UITabBarItem(title, image, selectedImage);
}

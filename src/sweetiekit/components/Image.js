const SweetieKit = Require('std:sweetiekit.node');

const { UIImage } = SweetieKit;

/**
 * @param {string} name
 * @returns {UIImage}
 */
export default function makeImage(name) {
  return UIImage(name);
}

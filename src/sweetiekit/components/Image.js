const SweetieKit = Require('std:sweetiekit.node');

const { UIImage } = SweetieKit;

const cache = {};

/**
 * @param {string} name
 * @returns {UIImage}
 */
export default function makeImage(name) {
  if (cache[name]) {
    return cache[name];
  }

  cache[name] = UIImage(name);
  return cache[name];
}

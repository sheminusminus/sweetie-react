const SweetieKit = Require('std:sweetiekit.node');

const { UIImage } = SweetieKit;

const cache = {};

/**
 * @param {string} name
 * @param {boolean} useCache
 * @returns {UIImage}
 */
export default function makeImage(name, useCache = true) {
  if (!useCache) {
    return UIImage(name);
  }

  if (cache[name]) {
    return cache[name];
  }

  cache[name] = UIImage(name);
  return cache[name];
}

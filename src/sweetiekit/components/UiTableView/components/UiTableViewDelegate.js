const SweetieKit = Require('std:sweetiekit.node');

const { UITableViewDelegate } = SweetieKit;

export { UITableViewDelegate };

/**
 * @param {Object} options
 * @returns {UITableViewDelegate}
 */
export default function makeTableViewDelegate(options = {}) {
  return UITableViewDelegate(options);
}

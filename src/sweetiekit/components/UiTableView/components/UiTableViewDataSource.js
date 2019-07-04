const SweetieKit = Require('std:sweetiekit.node');

const { UITableViewDataSource } = SweetieKit;

export { UITableViewDataSource };

/**
 * @param {Object} options
 * @returns {UITableViewDataSource}
 */
export default function makeTableViewDataSource(options = {}) {
  if (!options.numberOfRowsInSection) {
    throw new Error('UITableViewDataSource numberOfRowsInSection() is required');
  }

  if (!options.cellForRowAtIndexPath) {
    throw new Error('UITableViewDataSource cellForRowAtIndexPath() is required');
  }

  return UITableViewDataSource(options);
}

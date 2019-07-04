const SweetieKit = Require('std:sweetiekit.node');

const { UIPickerViewDataSource } = SweetieKit;

export { UIPickerViewDataSource };

/**
 * @param {Object} options
 * @returns {UIPickerViewDataSource}
 */
export default function makePickerViewDataSource(options = {}) {
  // if (!options.numberOfRowsInSection) {
  //   throw new Error('UITableViewDataSource numberOfRowsInSection() is required');
  // }
  //
  // if (!options.cellForRowAtIndexPath) {
  //   throw new Error('UITableViewDataSource cellForRowAtIndexPath() is required');
  // }

  return UIPickerViewDataSource(options);
}

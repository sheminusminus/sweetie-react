const SweetieKit = Require('std:sweetiekit.node');

const { UIPickerViewDelegate } = SweetieKit;

export { UIPickerViewDelegate };

/**
 * @param {Object} options
 * @returns {UIPickerViewDataSource}
 */
export default function makePickerViewDelegate(options = {}) {
  // if (!options.numberOfRowsInSection) {
  //   throw new Error('UITableViewDataSource numberOfRowsInSection() is required');
  // }
  //
  // if (!options.cellForRowAtIndexPath) {
  //   throw new Error('UITableViewDataSource cellForRowAtIndexPath() is required');
  // }

  return UIPickerViewDelegate(options);
}

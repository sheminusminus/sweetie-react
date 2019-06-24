const SweetieKit = Require('std:sweetiekit.node');

const { UIImage } = SweetieKit;

export default function makeImage(named) {
  return UIImage(named);
}

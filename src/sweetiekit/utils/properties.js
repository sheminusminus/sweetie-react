import colors from "./colors";

const { UIControlState, UIControlEvents, NSTextAlignment } = global.SweetieKitEnums;

export const viewAttrs = ['frame', 'backgroundColor'];
export const viewDefaults = {
  backgroundColor: colors.white,
};

export const textViewAttrs = [...viewAttrs, 'font', 'textAlignment'];
export const textViewDefaults = {
  ...viewDefaults,
  backgroundColor: colors.clear,
  textAlignment: NSTextAlignment.left,
};

export const layerAttrs = ['cornerRadius', 'shadowOffset', 'shadowColor', 'borderWidth', 'borderColor'];
export const layerDefaults = {};

import * as colors from "./colors";

export const viewAttrs = ['frame', 'backgroundColor'];
export const viewDefaults = {
  backgroundColor: colors.clear,
};

export const textViewAttrs = [...viewAttrs, 'font', 'textAlignment'];
export const textViewDefaults = {
  ...viewDefaults,
  backgroundColor: colors.clear,
  textAlignment: NSTextAlignmentLeft,
};

export const layerAttrs = ['cornerRadius', 'shadowOffset', 'shadowColor', 'borderWidth', 'borderColor'];
export const layerDefaults = {};

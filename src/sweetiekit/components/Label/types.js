// @flow

import type { Color, ViewProps } from '../sharedTypes';


export type LabelProps = {
  ...ViewProps,
  font: any,
  text: ?string,
  textAlignment: any,
  textColor: ?Color,
};

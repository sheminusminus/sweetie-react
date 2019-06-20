// @flow

import type { ViewProps } from '../sharedTypes';

type BaseTextFieldProps = {
  numberOfLines?: number,
  text?: string,
};

export type TextFieldProps = ViewProps & BaseTextFieldProps;

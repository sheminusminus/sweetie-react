// @flow

import React from 'react';

import Control from '../Control';

import type { Color, Frame, Layer, TargetTuple } from '../sharedTypes';

type TextFieldProps = {
  backgroundColor?: Color,
  children?: any,
  font?: any,
  frame?: Frame,
  layer?: Layer,
  numberOfLines?: number,
  target?: TargetTuple,
  text?: string,
  type?: string,
};

class TextField extends React.Component<TextFieldProps> {
  static defaultProps: TextFieldProps = {
    text: '',
    type: 'ui-text-field',
  };

  render() {
    const {
      children,
      type,
      ...rest
    } = this.props;

    return (
      <Control
        {...rest}
        type={type}
      />
    )
  }
}

export default TextField;

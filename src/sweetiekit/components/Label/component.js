// @flow

import React from 'react';

import View from '../View';

import type { Color, Frame, Layer } from '../sharedTypes';

type LabelProps = {
  children?: any,
  font?: any,
  image?: any,
  backgroundColor?: Color,
  frame?: Frame,
  layer?: Layer,
  text?: string,
  textAlignment?: any,
  textColor?: Color,
  type?: string,
};

class Label extends React.Component<LabelProps> {
  static defaultProps: LabelProps = {
    text: '',
    type: 'ui-label',
  };

  render() {
    const {
      children,
      type,
      ...rest
    } = this.props;

    return (
      <View
        {...rest}
        type={type}
      >
        {children}
      </View>
    )
  }
}

export default Label;

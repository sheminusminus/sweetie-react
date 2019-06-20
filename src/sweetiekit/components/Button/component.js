// @flow

import React from 'react';

import Control from '../Control';

import type { Color, Frame, Layer, TargetTuple } from '../sharedTypes';

type ButtonProps = {
  backgroundColor?: Color,
  children?: any,
  frame?: Frame,
  layer?: Layer,
  target?: TargetTuple,
  type?: string,
};

/**
 * Renders a Control.
 */
class Button extends React.Component<ButtonProps> {
  static defaultProps: ButtonProps = {
    type: 'ui-button',
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

export default Button;

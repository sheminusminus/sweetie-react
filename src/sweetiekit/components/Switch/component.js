// @flow

import React from 'react';

import Control from '../Control';

import type { Color, Frame, Layer, TargetTuple } from '../sharedTypes';

type SwitchProps = {
  backgroundColor?: Color,
  frame?: Frame,
  layer?: Layer,
  target?: TargetTuple,
  type?: string,
};

class Switch extends React.Component<SwitchProps> {
  static defaultProps: SwitchProps = {
    type: 'ui-switch',
  };

  render() {
    const {
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

export default Switch;

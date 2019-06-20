// @flow

import React from 'react';

import Control from '../Control';

import type { Color, Frame, Layer, TargetTuple } from '../sharedTypes';

type SliderProps = {
  backgroundColor?: Color,
  frame?: Frame,
  layer?: Layer,
  target?: TargetTuple,
  type?: string,
};

class Slider extends React.Component<SliderProps> {
  static defaultProps: SliderProps = {
    type: 'ui-slider',
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

export default Slider;

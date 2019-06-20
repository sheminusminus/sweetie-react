// @flow

import React from 'react';

import type { ControlProps } from '../sharedTypes';

import { slider } from '../../utils/types';

import Control from '../Control';


class Slider extends React.Component<ControlProps> {
  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <Control
        {...rest}
        type={slider}
      />
    )
  }
}


export default Slider;

import React from 'react';

import { slider } from '../utils/types';

import Control from './Control';


class Slider extends React.Component {
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

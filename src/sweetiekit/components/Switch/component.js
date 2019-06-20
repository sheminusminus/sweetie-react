// @flow

import React from 'react';

import type { ControlProps } from '../sharedTypes';

import { uiSwitch } from '../../utils/types';

import Control from '../Control';


class Switch extends React.Component<ControlProps> {
  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <Control
        {...rest}
        type={uiSwitch}
      />
    )
  }
}


export default Switch;

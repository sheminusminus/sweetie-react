// @flow

import React from 'react';

import type { ViewProps } from '../sharedTypes';

import { button } from '../../utils/types';

import Control from '../Control';


class Button extends React.Component<ViewProps> {
  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <Control
        {...rest}
        type={button}
      />
    )
  }
}


export default Button;

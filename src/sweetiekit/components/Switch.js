import React from 'react';

import { uiSwitch } from '../utils/types';

import Control from './Control';


class Switch extends React.Component {
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

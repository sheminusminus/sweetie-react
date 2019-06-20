import React from 'react';

import { button } from '../../utils/types';

import Control from '../Control';


class Button extends React.Component {
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

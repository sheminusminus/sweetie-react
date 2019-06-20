import React from 'react';

import { textField } from '../../utils/types';

import Control from '../Control';


class TextField extends React.Component {
  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <Control
        {...rest}
        type={textField}
      />
    )
  }
}


export default TextField;

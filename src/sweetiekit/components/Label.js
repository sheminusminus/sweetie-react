import React from 'react';

import { label } from '../utils/types';

import View from './View';


class Label extends React.Component {
  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <View
        {...rest}
        type={label}
      >
        {children}
      </View>
    )
  }
}


export default Label;

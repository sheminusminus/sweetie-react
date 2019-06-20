// @flow

import React from 'react';

import type { LabelProps } from './types';

import { label } from '../../utils/types';

import View from '../View';


class Label extends React.Component<LabelProps> {
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

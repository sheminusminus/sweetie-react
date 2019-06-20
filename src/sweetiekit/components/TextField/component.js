// @flow

import React from 'react';

import type { TextFieldProps } from './types';

import { textField } from '../../utils/types';

import Control from '../Control';


class TextField extends React.Component<TextFieldProps> {
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

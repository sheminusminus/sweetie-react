// @flow

import React from 'react';

import type { ControlProps } from '../sharedTypes';

import { control, view } from '../../utils/types';

import View from '../View';


class Control extends React.Component<ControlProps> {
  render() {
    const {
      baseTypes,
      children,
      type,
      ...rest
    } = this.props;

    return (
      <View
        {...rest}
        baseTypes={baseTypes || [control, view]}
        type={type || control}
      >
        {children}
      </View>
    )
  }
}


export default Control;

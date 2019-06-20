// @flow

import React from 'react';

import View from '../View';

import type { Color, Frame, Layer, TargetTuple } from '../sharedTypes';

type ControlProps = {
  backgroundColor?: Color,
  baseTypes?: string[],
  children?: any,
  frame?: Frame,
  layer?: Layer,
  target?: TargetTuple,
  type?: string,
};

class BaseControl extends React.Component<ControlProps> {
  static defaultProps: ControlProps = {
    baseTypes: ['ui-control', 'ui-view'],
    type: 'ui-control',
  };

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
        baseTypes={baseTypes}
        type={type}
      >
        {children}
      </View>
    )
  }
}

export default BaseControl;

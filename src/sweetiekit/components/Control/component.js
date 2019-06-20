// @flow

import React from 'react';

import BaseControl from '../BaseControl';

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

class Control extends React.Component<ControlProps> {
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
      <BaseControl
        {...rest}
        baseTypes={baseTypes}
        type={type}
      >
        {children}
      </BaseControl>
    )
  }
}

export default Control;

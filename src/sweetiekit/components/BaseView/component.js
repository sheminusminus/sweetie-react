// @flow

import React from 'react';

import type { Color, Frame, Layer } from '../sharedTypes';

type ViewProps = {
  baseTypes?: string[],
  children?: any,
  type?: string,
  backgroundColor?: Color,
  frame?: Frame,
  layer?: Layer,
};

/**
 * View
 */
class BaseView extends React.Component<ViewProps> {
  static defaultProps: ViewProps = {
    baseTypes: ['ui-view'],
    type: 'ui-view',
  };

  render() {
    const {
      baseTypes,
      children,
      type,
      ...rest
    } = this.props;

    return (
      <ui-view
        {...rest}
        baseTypes={baseTypes || [type]}
        type={type}
      >
        {children}
      </ui-view>
    )
  }
}

export default BaseView;

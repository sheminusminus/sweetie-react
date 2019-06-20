// @flow

import React from 'react';

import BaseView from '../BaseView';

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
class View extends React.Component<ViewProps> {
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
      <BaseView
        {...rest}
        baseTypes={baseTypes || [type]}
        type={type}
      >
        {children}
      </BaseView>
    )
  }
}

export default View;

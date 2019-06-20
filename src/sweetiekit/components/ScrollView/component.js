// @flow

import React from 'react';

import View from '../View';

import type { Color, Frame, Layer } from '../sharedTypes';

type ScrollViewProps = {
  children?: any,
  backgroundColor?: Color,
  frame?: Frame,
  layer?: Layer,
  type?: string,
};

class ScrollView extends React.Component<ScrollViewProps> {
  static defaultProps: ScrollViewProps = {
    type: 'ui-scroll-view',
  };

  render() {
    const {
      children,
      type,
      ...rest
    } = this.props;

    return (
      <View
        {...rest}
        type={type}
      >
        {children}
      </View>
    )
  }
}

export default ScrollView;

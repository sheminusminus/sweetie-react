// @flow

import React from 'react';

import type { ViewProps } from '../sharedTypes';

import { scrollView } from '../../utils/types';

import View from '../View';


class ScrollView extends React.Component<ViewProps> {
  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <View
        {...rest}
        type={scrollView}
      >
        {children}
      </View>
    )
  }
}


export default ScrollView;

import React from 'react';

import { scrollView } from '../utils/types';

import View from './View';


class ScrollView extends React.Component {
  render() {
    const {
      backgroundColor,
      children,
      frame,
      layer,
    } = this.props;

    return (
      <View
        backgroundColor={backgroundColor}
        frame={frame}
        layer={layer}
        type={scrollView}
      >
        {children}
      </View>
    )
  }
}


export default ScrollView;

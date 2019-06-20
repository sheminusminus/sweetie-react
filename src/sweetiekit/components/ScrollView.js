import React from 'react';

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
        type="ui-scroll-view"
      >
        {children}
      </View>
    )
  }
}


export default ScrollView;

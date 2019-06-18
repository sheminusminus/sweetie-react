import React from 'react';


class ScrollView extends React.Component {
  render() {
    const {
      backgroundColor,
      children,
      frame,
      layer,
    } = this.props;

    return (
      <ui-scroll-view
        backgroundColor={backgroundColor}
        frame={frame}
        layer={layer}
      >
        {children}
      </ui-scroll-view>
    )
  }
}


export default ScrollView;

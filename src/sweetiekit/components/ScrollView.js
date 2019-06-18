import React from 'react';


class ScrollView extends React.Component {
  render() {
    const {
      backgroundColor,
      frame,
      layer,
      target,
      text,
    } = this.props;

    return (
      <ui-scroll-view
        backgroundColor={backgroundColor}
        frame={frame}
        layer={layer}
        target={target}
        title={text}
      />
    )
  }
}


export default ScrollView;

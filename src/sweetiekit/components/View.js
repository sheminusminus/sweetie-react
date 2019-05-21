import React from 'react';


class View extends React.Component {
  render() {
    const {
      backgroundColor,
      children,
      frame,
      layer,
    } = this.props;

    return (
      <ui-view
        backgroundColor={backgroundColor}
        frame={frame}
        layer={layer}
      >
        {children}
      </ui-view>
    )
  }
}


export default View;

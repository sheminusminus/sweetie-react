import React from 'react';


class View extends React.Component {
  render() {
    const { backgroundColor, children, frame } = this.props;

    return (
      <ui-view
        backgroundColor={backgroundColor}
        frame={{
          x: 0,
          y: 0,
          width: frame.width,
          height: frame.height,
        }}
      >
        {children}
      </ui-view>
    )
  }
}


export default View;

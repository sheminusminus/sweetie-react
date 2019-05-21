import React from 'react';


class Button extends React.Component {
  render() {
    const { children, frame } = this.props;

    return (
      <ui-button
        frame={{
          x: 0,
          y: 0,
          width: frame.width,
          height: frame.height,
        }}
        title={children}
      />
    )
  }
}


export default Button;

import React from 'react';


class Button extends React.Component {
  render() {
    const {
      backgroundColor,
      frame,
      layer,
      target,
      title,
      titleColor,
    } = this.props;

    return (
      <ui-button
        backgroundColor={backgroundColor}
        frame={frame}
        layer={layer}
        target={target}
        title={title}
        titleColor={titleColor}
      />
    )
  }
}


export default Button;

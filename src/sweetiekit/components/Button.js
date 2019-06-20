import React from 'react';

import Control from './Control';


class Button extends React.Component {
  render() {
    const {
      backgroundColor,
      frame,
      layer,
      target,
      title,
      titleColor,
      titleLabel,
    } = this.props;

    return (
      <Control
        backgroundColor={backgroundColor}
        frame={frame}
        layer={layer}
        target={target}
        title={title}
        titleColor={titleColor}
        titleLabel={titleLabel}
        type="ui-button"
      />
    )
  }
}


export default Button;

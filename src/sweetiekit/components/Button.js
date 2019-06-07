import React from 'react';


const platform = global.__PLATFORM__;

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

    return platform === 'ios' ? (
      <ui-button
        backgroundColor={backgroundColor}
        frame={frame}
        layer={layer}
        target={target}
        title={title}
        titleColor={titleColor}
        titleLabel={titleLabel}
      />
    ) : (
      <ui-button
        backgroundColor={backgroundColor}
        frame={frame}
        layer={layer}
        target={target}
        title={title}
        titleColor={titleColor}
        titleLabel={titleLabel}
      >
        {title}
      </ui-button>
    )
  }
}


export default Button;

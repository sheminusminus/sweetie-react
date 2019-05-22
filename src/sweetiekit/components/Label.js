import React from 'react';


class Label extends React.Component {
  render() {
    const {
      backgroundColor,
      children,
      font,
      frame,
      textAlignment,
      textColor,
    } = this.props;

    return (
      <ui-label
        backgroundColor={backgroundColor}
        font={font}
        frame={frame}
        textAlignment={textAlignment}
        textColor={textColor}
      >
        {children}
      </ui-label>
    )
  }
}

export default Label;

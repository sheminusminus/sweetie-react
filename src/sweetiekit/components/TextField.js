import React from 'react';


class TextField extends React.Component {
  render() {
    const {
      backgroundColor,
      frame,
      layer,
      placeholder,
      target,
      text,
    } = this.props;

    return (
      <ui-text-field
        backgroundColor={backgroundColor}
        frame={frame}
        layer={layer}
        placeholder={placeholder}
        target={target}
        text={text}
      />
    )
  }
}


export default TextField;

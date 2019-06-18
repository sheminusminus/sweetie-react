import React from 'react';


class TextField extends React.Component {
  render() {
    const {
      backgroundColor,
      frame,
      layer,
      target,
      text,
    } = this.props;

    return (
      <ui-text-field
        backgroundColor={backgroundColor}
        frame={frame}
        layer={layer}
        target={target}
        title={text}
      />
    )
  }
}


export default TextField;

import React from 'react';

import Control from './Control';


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
      <Control
        backgroundColor={backgroundColor}
        frame={frame}
        layer={layer}
        placeholder={placeholder}
        target={target}
        text={text}
        type="ui-text-field"
      />
    )
  }
}


export default TextField;

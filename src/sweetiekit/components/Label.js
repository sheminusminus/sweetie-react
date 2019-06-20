import React from 'react';

import View from './View';


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
      <View
        backgroundColor={backgroundColor}
        font={font}
        frame={frame}
        textAlignment={textAlignment}
        textColor={textColor}
        type="ui-label"
      >
        {children}
      </View>
    )
  }
}


export default Label;

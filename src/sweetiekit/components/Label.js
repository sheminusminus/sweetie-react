import React from 'react';

import { label } from '../utils/types';

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
        type={label}
      >
        {children}
      </View>
    )
  }
}


export default Label;

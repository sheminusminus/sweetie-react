import React from 'react';
const SweetieKit = Require('std:sweetiekit.node');

const { UIFont } = SweetieKit;

import { colors } from '../sweetiekit/utils';
import { Label } from '../sweetiekit/components';

import withTheme from './withTheme';

const { NSTextAlignment } = global.SweetieKitEnums;

const font = new UIFont('Lato-Bold', 17);


class Title extends React.Component {
  render() {
    const { children, frame, theme } = this.props;

    return (
      <Label
        backgroundColor={colors.clear}
        font={font}
        frame={frame}
        textAlignment={NSTextAlignment.center}
        textColor={theme.title.color}
      >
        {children}
      </Label>
    );
  }
}


export default withTheme(Title);

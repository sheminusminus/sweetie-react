import React from 'react';
const SweetieKit = Require('std:sweetiekit.node');

const { UIFont } = SweetieKit;

import { NSTextAlignment } from '../sweetiekit/enums';
import { clear } from '../sweetiekit/colors';
import { Label } from '../sweetiekit/components';

import withTheme from './withTheme';

const font = new UIFont('Lato-Bold', 17);


class Title extends React.Component {
  render() {
    const { children, frame, theme } = this.props;

    return (
      <Label
        backgroundColor={clear}
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

import React from 'react';
const SweetieKit = Require('std:sweetiekit.node');

const { UIFont } = SweetieKit;

import { colors } from '../sweetiekit/utils';
import { UIKit } from '../sweetiekit/enums';
import { Label } from '../sweetiekit/components';

import withTheme from './withTheme';

const { NSTextAlignment } = UIKit;

const font = new UIFont('Lato-Bold', 17);


class Title extends React.Component {
  render() {
    const { children, frame, theme = {} } = this.props;

    const { title = {} } = theme;
    const { color = colors.darkGrey } = title;

    return (
      <Label
        backgroundColor={colors.clear}
        font={font}
        frame={frame}
        textAlignment={NSTextAlignment.center}
        textColor={color}
      >
        {children}
      </Label>
    );
  }
}


export default withTheme(Title);

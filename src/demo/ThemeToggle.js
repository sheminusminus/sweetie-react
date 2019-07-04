import React from 'react';
const SweetieKit = Require('std:sweetiekit.node');

const { UIFont } = SweetieKit;

import { UiButton } from '../sweetiekit/components';
import { UIKit } from '../sweetiekit/enums';

import withTheme from './withTheme';

const { UIControlEvents } = UIKit;

const btnFont = new UIFont('Lato-Black', 17);


class ThemeToggle extends React.Component {
  render() {
    const { frame, onClick, theme } = this.props;

    return (
      <UiButton
        backgroundColor={theme.button.backgroundColor}
        frame={frame}
        layer={{
          cornerRadius: frame.height / 2,
          shadowColor: theme.button.shadowColor,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: theme.button.shadowOpacity,
        }}
        title="TOGGLE THEME"
        titleColor={theme.button.titleColor}
        titleLabel={{
          font: btnFont,
        }}
        target={[onClick, UIControlEvents.touchUpInside]}
      />
    );
  }
}

export default withTheme(ThemeToggle);

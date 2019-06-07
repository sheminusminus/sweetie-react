import React from 'react';
if (!global.SweetieKitEnums) {
  global.SweetieKitEnums = {};
}
if (typeof Require === 'undefined') {
  global.Require = function (str) {
    console.log('Require', str);
    return {};
  };
}

const SweetieKit = Require('std:sweetiekit.node');

const { UIFont } = SweetieKit;

import { Button } from '../sweetiekit/components';

import { colors, getThemeProp } from '../sweetiekit/common-utils';

import withTheme from './withTheme';

const { UIControlEvents = {} } = global.SweetieKitEnums;

const btnFont = UIFont !== undefined ? new UIFont('Lato-Black', 17) : {};


class ThemeToggle extends React.Component {
  render() {
    const { frame, onClick, theme } = this.props;

    const bgColor = getThemeProp(theme, 'button', 'backgroundColor') || colors.clear;
    const titleColor = getThemeProp(theme, 'button', 'titleColor') || colors.black;
    const shadowOp = getThemeProp(theme, 'button', 'shadowOpacity') || 0;
    const shadowColor = getThemeProp(theme, 'button', 'shadowColor') || colors.clear;

    return (
      <Button
        backgroundColor={bgColor}
        frame={frame}
        layer={{
          cornerRadius: frame.height / 2,
          shadowColor: shadowColor,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: shadowOp,
        }}
        title="TOGGLE THEME"
        titleColor={titleColor}
        titleLabel={{
          font: btnFont,
        }}
        target={[onClick, UIControlEvents.touchUpInside]}
      />
    );
  }
}

export default withTheme(ThemeToggle);

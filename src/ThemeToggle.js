import React from 'react';

import { Button } from './sweetiekit/components';
import { UIControlEvents } from "./sweetiekit/enums";
import * as colors from './sweetiekit/colors';

import withTheme from './withTheme';


class ThemeToggle extends React.Component {
  render() {
    const { frame, onClick, theme } = this.props;

    return (
      <Button
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
        target={[onClick, UIControlEvents.touchUpInside]}
      />
    );
  }
}

export default withTheme(ThemeToggle);

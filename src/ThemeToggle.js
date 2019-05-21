import React from 'react';

import { Button } from './sweetiekit/components';
import { UIControlEvents } from "./sweetiekit/enums";
import colors from './sweetiekit/colors';

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
        }}
        title="TOGGLE THEME"
        target={[onClick, UIControlEvents.touchUpInside]}
      />
    );
  }
}

export default withTheme(ThemeToggle);

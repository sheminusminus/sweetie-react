import React from 'react';

import MainView from './MainView';
import ThemeToggle from './ThemeToggle';

import * as colors from './sweetiekit/colors';
import ThemeContext from './context';

const themes = {
  dark: {
    view: {
      backgroundColor: colors.fitbodDarkGrey,
    },
    button: {
      backgroundColor: colors.fitbodPink,
      titleColor: colors.fitbodDarkGrey,
    },
  },
  light: {
    view: {
      backgroundColor: colors.fitbodPink,
    },
    button: {
      backgroundColor: colors.fitbodLightGrey,
      titleColor: colors.fitbodDarkGrey,
    },
  },
};


class App extends React.Component {
  state = {
    theme: 'dark',
  };

  handleButtonClick = () => {
    const { theme } = this.state;
    this.setState({ theme: theme === 'dark' ? 'light' : 'dark' });
  };

  render() {
    const { theme } = this.state;
    const { frame } = this.props;

    return (
      <ThemeContext.Provider value={themes[theme]}>
        <MainView frame={frame} theme={theme}>
          <ThemeToggle
            frame={{ x: 12, y: 60, width: frame.width - 24, height: 50 }}
            onClick={this.handleButtonClick}
            theme={theme}
          />
        </MainView>
      </ThemeContext.Provider>
    );
  }
}

export default App;

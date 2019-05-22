import React from 'react';

import MainView from './MainView';
import ThemeToggle from './ThemeToggle';
import Title from './Title';

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
      shadowColor: colors.black,
      shadowOpacity: 0.8,
    },
    title: {
      color: colors.fitbodLightGrey,
    },
  },
  light: {
    view: {
      backgroundColor: colors.fitbodPink,
    },
    button: {
      backgroundColor: colors.fitbodLightGrey,
      titleColor: colors.white,
      shadowColor: colors.fitbodDarkGrey,
      shadowOpacity: 1,
    },
    title: {
      color: colors.white,
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
          <Title frame={{
            x: 12,
            y: 90,
            width: frame.width - 24,
            height: 20,
          }}>
            WELCOME
          </Title>

          <ThemeToggle
            frame={{
              x: 12,
              y: (frame.height - 50) / 2,
              width: frame.width - 24,
              height: 50,
            }}
            onClick={this.handleButtonClick}
            theme={theme}
          />
        </MainView>
      </ThemeContext.Provider>
    );
  }
}

export default App;

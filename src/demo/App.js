import React from 'react';

import { colors } from '../sweetiekit/common-utils';

import MainView from './MainView';
import ThemeToggle from './ThemeToggle';
import Title from './Title';

import ThemeContext from './context';

const themes = {
  dark: {
    view: {
      backgroundColor: colors.darkGrey,
    },
    button: {
      backgroundColor: colors.pink,
      titleColor: colors.darkGrey,
      shadowColor: colors.black,
      shadowOpacity: 0.8,
    },
    title: {
      color: colors.lightGrey,
    },
  },
  light: {
    view: {
      backgroundColor: colors.pink,
    },
    button: {
      backgroundColor: colors.lightGrey,
      titleColor: colors.white,
      shadowColor: colors.darkGrey,
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
            {theme === 'dark' ? 'DARK THEME!' : 'LIGHT THEME@@@'}
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

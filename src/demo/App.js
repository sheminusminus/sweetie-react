const SweetieKit = Require('std:sweetiekit.node');

import React from 'react';

import { colors } from '../sweetiekit/utils';

import MainView from './MainView';
import NameBox from './NameBox';
import ThemeToggle from './ThemeToggle';
import Title from './Title';
import { ImageView, ViewController, TapGestureRecognizer, Slider, Switch } from '../sweetiekit/components';

import ThemeContext from './context';


const {
  UIImage,
} = SweetieKit;

const image = UIImage('logo');

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
    name: '',
    hasChildController: false,
  };

  handleButtonClick = () => {
    const { theme } = this.state;
    this.setState({ theme: theme === 'dark' ? 'light' : 'dark' });
  };

  handleFieldChange = (evt) => {
    console.log(evt);
  };

  toggleHasChild = () => {
    const { hasChildController } = this.state;
    this.setState({ hasChildController: !hasChildController });
  };

  handleSwitchChange = (evt) => {
    console.log('switch changed', evt);
  };

  render() {
    const { hasChildController, name, theme } = this.state;
    const { frame } = this.props;

    if (hasChildController) {
      return (
        <ViewController key="view-controller-0">
          <MainView frame={frame} theme={theme}>
            <Title
              frame={{
                x: 12,
                y: 90,
                width: frame.width - 24,
                height: 20,
              }}
            >
              WELCOME
            </Title>

            <ImageView
              backgroundColor={colors.medGrey}
              frame={{
                x: 12,
                y: 130,
                width: frame.width - 24,
                height: frame.width - 24,
              }}
              image={image}
              layer={{
                cornerRadius: 12,
              }}
            />

            <TapGestureRecognizer
              target={this.toggleHasChild}
            />
          </MainView>
        </ViewController>
      );
    }

    return (
      <ThemeContext.Provider value={themes[theme]}>
        <MainView frame={frame} theme={theme}>
          <Title
            frame={{
              x: 12,
              y: 90,
              width: frame.width - 24,
              height: 20,
            }}
          >
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

          <ThemeToggle
            frame={{
              x: 12,
              y: ((frame.height - 50) / 2) + 100,
              width: frame.width - 24,
              height: 50,
            }}
            onClick={this.toggleHasChild}
            theme={theme}
          />

          <NameBox
            frame={{
              x: 12,
              y: (frame.height - 50) / 2 - 120,
              width: frame.width - 24,
              height: 50,
            }}
            onChange={this.handleFieldChange}
            value={name}
          />

          <Slider
            frame={{
              x: 12,
              y: ((frame.height - 50) / 2) + 160,
              width: frame.width - 24,
              height: 50,
            }}
            target={[this.handleSwitchChange, UIControlEventValueChanged]}
          />
        </MainView>
      </ThemeContext.Provider>
    );
  }
}

export default App;

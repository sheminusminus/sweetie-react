import React from 'react';

import { colors } from '../sweetiekit/utils';

import {
  SpriteKitScene,
  SpriteKitView,
  SpriteKitSpriteNode,
  Image,
} from '../sweetiekit/components';

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

const monster = Image('monster');

class App extends React.Component {
  state = {
    theme: 'dark',
    name: '',
    hasChildController: false,
    sliderValue: 0,
    selectedSegmentIndex: 1,
    tabIndex: 0,
    spriteX: 100,
    spriteY: 100,
  };

  interval = null;

  componentDidMount() {
    const { frame } = this.props;
    console.log('componentDidMount', this.state.spriteX, this.state.spriteY);
    this.interval = setInterval(() => {
      this.setState(state => ({
        spriteX: state.spriteX >= frame.width ? 100 : state.spriteX + 0.5,
        spriteY: state.spriteY >= frame.height ? 100 : state.spriteY + 1,
      }));
    }, 10);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount', this.state.spriteX, this.state.spriteY);
    clearInterval(this.interval);
  }

  handleButtonClick = () => {
    const { theme } = this.state;
    this.setState({ theme: theme === 'dark' ? 'light' : 'dark' });
  };

  handleFieldChange = (sender) => {
    if (sender.text) {
      this.setState({ name: sender.text });
    } else {
      this.setState({ name: '' });
    }
  };

  toggleHasChild = () => {
    const { hasChildController } = this.state;
    this.setState({ hasChildController: !hasChildController });
  };

  handleSliderChange = (sender) => {
    if (sender.value) {
      this.setState({ sliderValue: sender.value });
    } else {
      this.setState({ sliderValue: 0 });
    }
  };

  handleSegmentChanged = (sender) => {
    this.setState({ selectedSegmentIndex: sender.selectedSegmentIndex });
  };

  handleTabChanged = (sender) => {
    console.log(sender);
  };

  render() {
    const {
      hasChildController,
      name,
      tabIndex,
      theme,
      selectedSegmentIndex,
      spriteX,
      spriteY,
    } = this.state;

    const { frame } = this.props;

    return (
      <ThemeContext.Provider value={themes[theme]}>
        <SpriteKitView
          backgroundColor={colors.medGrey}
          frame={frame}
        >
          <SpriteKitScene
            backgroundColor={colors.pink}
            size={frame}
          >
            <SpriteKitSpriteNode
              image={monster}
              position={{ x: spriteX, y: spriteY }}
              size={{ width: 80, height: 80 }}
            />
          </SpriteKitScene>
        </SpriteKitView>
      </ThemeContext.Provider>
    );
  }
}

export default App;

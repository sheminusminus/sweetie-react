import React from 'react';

import { colors } from '../sweetiekit/utils';

import {
  ArSkView,
  SkScene,
  SkView,
  SkSpriteNode,
  Image,
} from '../sweetiekit/components';

import ThemeContext from './context';

import ControlsDemoView from './ControlsDemoView';

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
const monsterWidth = 54;
const monsterHeight = 80;

class App extends React.Component {
  state = {
    theme: 'dark',
    name: '',
    hasChildController: false,
    sliderValue: 0,
    selectedSegmentIndex: 1,
    tabIndex: 0,
    spriteY: 100,
    spriteX: 100,
    directionY: 1,
    directionX: 1,
  };

  interval = null;

  getNextSpriteState = (state) => {
    const { frame: { height, width } } = this.props;

    const halfW = monsterWidth * 0.5;
    const halfH = monsterHeight * 0.5;
    const maxX = width - halfW;
    const maxY = height - halfH;

    const nextDirY = state.spriteY >= maxY || state.spriteY <= halfH
      ? state.directionY * -1 : state.directionY;
    const nextDirX = state.spriteX >= maxX || state.spriteX <= halfW
      ? state.directionX * -1 : state.directionX;
    const nextY = state.spriteY + (nextDirY);
    const nextX =  state.spriteX + (nextDirX);

    return {
      directionY: nextDirY,
      directionX: nextDirX,
      spriteY: nextY,
      spriteX: nextX,
    };
  };

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
    if (sender) {
      this.setState({ tabIndex: sender.selectedIndex });
    }
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
      <ControlsDemoView
        onButtonClick={this.handleButtonClick}
        onFieldChange={this.handleFieldChange}
        onTabChanged={this.handleTabChanged}
        onSegmentChanged={this.handleSegmentChanged}
        hasChildController={hasChildController}
        frame={frame}
        name={name}
        tabIndex={tabIndex}
        theme={theme}
        toggleHasChild={this.toggleHasChild}
        selectedSegmentIndex={selectedSegmentIndex}
      />
    );
    // return (
    //   <ThemeContext.Provider value={themes[theme]}>
    //     <ArSkView
    //       ref={this.skView}
    //       backgroundColor={colors.medGrey}
    //       frame={frame}
    //     >
    //       <SkScene
    //         backgroundColor={colors.pink}
    //         size={frame}
    //       >
    //         <SkSpriteNode
    //           image={monster}
    //           position={{ x: spriteX, y: spriteY }}
    //           size={{ width: 54, height: 80 }}
    //         />
    //       </SkScene>
    //     </ArSkView>
    //   </ThemeContext.Provider>
    // );
  }
}

export default App;

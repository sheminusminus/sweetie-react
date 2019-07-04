import React from 'react';

import ControlsDemoView from './ControlsDemoView';

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

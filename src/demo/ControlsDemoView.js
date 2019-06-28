import React from 'react';

import { colors } from '../sweetiekit/utils';
import { UIKit } from '../sweetiekit/enums';

import MainView from './MainView';
import NameBox from './NameBox';
import ThemeToggle from './ThemeToggle';
import Title from './Title';
import {
  Image,
  ImageView,
  ViewController,
  TapGestureRecognizer,
  TabBarController,
  TabBarItem,
  SegmentedControl,
} from '../sweetiekit/components';

import ThemeContext from './context';

const { UIControlEvents } = UIKit;

const image = Image('logo');

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

const barItem0 = TabBarItem('Bar Item 0');
const barItem1 = TabBarItem('Bar Item 1');

class ControlsDemoView extends React.Component {
  render() {
    const {
      onButtonClick,
      onFieldChange,
      onSegmentChanged,
      onSliderChanged,
      hasChildController,
      frame,
      name,
      tabIndex,
      theme,
      toggleHasChild,
      selectedSegmentIndex,
    } = this.props;

    if (hasChildController) {
      return (
        <TabBarController selectedIndex={tabIndex}>
          <ViewController
            tabBarItem={barItem0}
          >
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
                target={toggleHasChild}
              />
            </MainView>
          </ViewController>
          <ViewController
            tabBarItem={barItem1}
          >
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

              <SegmentedControl
                frame={{
                  x: 12,
                  y: 140,
                  width: frame.width - 24,
                  height: 20,
                }}
                items={[
                  { title: 'Item A' },
                  { title: 'Item B' },
                  { title: 'Item C' },
                ]}
                selectedSegmentIndex={selectedSegmentIndex}
                target={[onSegmentChanged, UIControlEvents.valueChanged]}
              />

              <TapGestureRecognizer
                target={toggleHasChild}
              />
            </MainView>
          </ViewController>
        </TabBarController>
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
            onClick={onButtonClick}
            theme={theme}
          />

          <ThemeToggle
            frame={{
              x: 12,
              y: ((frame.height - 50) / 2) + 100,
              width: frame.width - 24,
              height: 50,
            }}
            onClick={toggleHasChild}
            theme={theme}
          />

          <NameBox
            frame={{
              x: 12,
              y: (frame.height - 50) / 2 - 120,
              width: frame.width - 24,
              height: 50,
            }}
            onChange={onFieldChange}
            value={name}
          />
        </MainView>
      </ThemeContext.Provider>
    );
  }
}

export default ControlsDemoView;

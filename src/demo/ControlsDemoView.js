import React from 'react';

import { colors } from '../sweetiekit/utils';
import { UIKit } from '../sweetiekit/enums';

import MainView from './MainView';
import NameBox from './NameBox';
import ThemeToggle from './ThemeToggle';
import Title from './Title';
import {
  UiImage,
  UiImageView,
  UiViewController,
  UiTapGestureRecognizer,
  UiTabBarController,
  UiTabBarItem,
  UiSegmentedControl,
  UiTabBarControllerDelegate,
  SweetEntity,
} from '../sweetiekit/components';

import ThemeContext from './context';

const { UIControlEvents } = UIKit;

const image = UiImage('logo');

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

const barItem0 = UiTabBarItem('Bar Item 0');
const barItem1 = UiTabBarItem('Bar Item 1');

class EntityLabel extends React.Component {
  render() {
    return (
      <SweetEntity
        baseTypes={['ui-label', 'ui-view']}
        frame={{ x: 0, y: 100, width: 100, height: 50 }}
        text="Sweet Entity"
        type="ui-label"
      />
    );
  }
}

class ControlsDemoView extends React.Component {
  tabCtrlDel = UiTabBarControllerDelegate({
    tabBarControllerDidSelectViewController: this.props.onTabChanged,
  });

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
        <UiTabBarController
          delegate={this.tabCtrlDel}
          selectedIndex={tabIndex}
        >
          <UiViewController
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

              <UiImageView
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

              <UiTapGestureRecognizer
                target={toggleHasChild}
              />
            </MainView>
          </UiViewController>
          <UiViewController
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

              <UiSegmentedControl
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

              <UiTapGestureRecognizer
                target={toggleHasChild}
              />
            </MainView>
          </UiViewController>
        </UiTabBarController>
      );
    }

    return (
      <ThemeContext.Provider value={themes[theme]}>
        <MainView frame={frame} theme={theme}>
          <EntityLabel />

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

          <SweetEntity
            backgroundColor={colors.white}
            frame={{
              x: 12,
              y: (frame.height - 50) / 2 - 120,
              width: frame.width - 24,
              height: 50,
            }}
            layer={{
              cornerRadius: 20,
            }}
            placeholder="Dynamic field"
            text={name}
            type="ui-text-field"
          />
        </MainView>
      </ThemeContext.Provider>
    );
  }
}

export default ControlsDemoView;

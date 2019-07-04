import React from 'react';

import { colors } from '../sweetiekit/utils';

import { UiView } from '../sweetiekit/components';

import withTheme from './withTheme';


class MainView extends React.Component {
  render() {
    const { children, frame, theme = {} } = this.props;

    const { view = {} } = theme;
    const { backgroundColor = colors.pink } = view;

    return (
      <UiView
        backgroundColor={backgroundColor}
        frame={frame}
      >
        {children}
      </UiView>
    )
  }
}


export default withTheme(MainView);

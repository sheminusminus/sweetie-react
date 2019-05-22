import React from 'react';

import { View } from '../sweetiekit/components';

import withTheme from './withTheme';


class MyView extends React.Component {
  render() {
    const { children, frame, theme } = this.props;

    return (
      <View
        backgroundColor={theme.view.backgroundColor}
        frame={frame}
      >
        {children}
      </View>
    )
  }
}


export default withTheme(MyView);

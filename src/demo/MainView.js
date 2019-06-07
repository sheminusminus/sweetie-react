import React from 'react';

import { View } from '../sweetiekit/components';
import { colors, getThemeProp } from '../sweetiekit/common-utils';

import withTheme from './withTheme';


class MyView extends React.Component {
  render() {
    const { children, frame, theme } = this.props;

    const bgColor = getThemeProp(theme, 'view', 'backgroundColor') || colors.white;

    return (
      <View
        backgroundColor={bgColor}
        frame={frame}
      >
        {children}
      </View>
    )
  }
}


export default withTheme(MyView);

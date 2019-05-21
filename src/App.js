import React from 'react';

import { View, Button, Text } from './sweetiekit/components';

import colors from './sweetiekit/colors';

class MyView extends React.Component {
  render() {
    const { frame } = this.props;

    return (
      <View
        backgroundColor={colors.fitbodPink}
        frame={frame}
      />
    )
  }
}

class App extends React.Component {
  state = {
    clicks: 0,
  };

  render() {
    const { clicks } = this.state;
    const { frame } = this.props;

    return (
      <MyView frame={frame} />
    );
  }
}

export default App;

import React from 'react';

import ThemeContext from './context';


function withTheme(Component) {
  class ComponentWithTheme extends React.Component {
    render() {
      const theme = this.context;

      return (
        <Component {...this.props} theme={theme} />
      );
    }
  }

  ComponentWithTheme.contextType = ThemeContext;

  return ComponentWithTheme;
}

export default withTheme;

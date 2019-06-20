import React from 'react';

import View from './View';


class Control extends React.Component {
  render() {
    const {
      children,
      type,
      ...rest
    } = this.props;

    return (
      <View
        {...rest}
        baseTypes={['ui-control', 'ui-view']}
        type={type || 'ui-control'}
      >
        {children}
      </View>
    )
  }
}


export default Control;

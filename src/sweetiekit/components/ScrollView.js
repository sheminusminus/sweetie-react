import React from 'react';

import { scrollView } from '../utils/types';

import View from './View';


class ScrollView extends React.Component {
  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <View
        {...rest}
        type={scrollView}
      >
        {children}
      </View>
    )
  }
}


export default ScrollView;

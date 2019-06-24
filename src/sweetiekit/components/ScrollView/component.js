import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../utils';

import View from '../View';

class ScrollView extends React.Component {
  static propTypes = {
    backgroundColor: PropTypes.shape({
      red: PropTypes.number.isRequired,
      green: PropTypes.number.isRequired,
      blue: PropTypes.number.isRequired,
      alpha: PropTypes.number,
    }),
    children: PropTypes.any,
    frame: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
    layer: PropTypes.shape(),
    type: PropTypes.string,
  };

  static defaultProps = {
    backgroundColor: colors.clear,
    children: undefined,
    frame: undefined,
    layer: undefined,
    type: 'ui-scroll-view',
  };

  render() {
    const {
      children,
      type,
      ...rest
    } = this.props;

    return (
      <View
        {...rest}
        type={type}
      >
        {children}
      </View>
    )
  }
}

export default ScrollView;

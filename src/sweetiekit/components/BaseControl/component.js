import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../utils';

import View from '../View';

class BaseControl extends React.Component {
  static propTypes = {
    backgroundColor: PropTypes.shape({
      red: PropTypes.number.isRequired,
      green: PropTypes.number.isRequired,
      blue: PropTypes.number.isRequired,
      alpha: PropTypes.number,
    }),
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.any,
    frame: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
    layer: PropTypes.shape(),
    target: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.any])),
    type: PropTypes.string,
  };

  static defaultProps = {
    backgroundColor: colors.clear,
    baseTypes: ['ui-control', 'ui-view'],
    children: undefined,
    frame: undefined,
    layer: undefined,
    type: 'ui-control',
  };

  render() {
    const {
      baseTypes,
      children,
      type,
      ...rest
    } = this.props;

    return (
      <View
        {...rest}
        baseTypes={baseTypes}
        type={type}
      >
        {children}
      </View>
    )
  }
}

export default BaseControl;

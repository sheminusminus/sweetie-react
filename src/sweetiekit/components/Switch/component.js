import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../utils';

import Control from '../Control';

class Switch extends React.Component {
  static propTypes = {
    backgroundColor: PropTypes.shape({
      red: PropTypes.number.isRequired,
      green: PropTypes.number.isRequired,
      blue: PropTypes.number.isRequired,
      alpha: PropTypes.number,
    }),
    frame: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
    layer: PropTypes.shape(),
    on: PropTypes.bool,
    target: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.any])),
    type: PropTypes.string,
  };

  static defaultProps = {
    backgroundColor: colors.clear,
    frame: undefined,
    layer: undefined,
    on: false,
    target: undefined,
    type: 'ui-switch',
  };

  render() {
    const {
      type,
      ...rest
    } = this.props;

    return (
      <Control
        {...rest}
        type={type}
      />
    )
  }
}

export default Switch;

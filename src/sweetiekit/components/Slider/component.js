import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../utils';

import Control from '../Control';

class Slider extends React.Component {
  static propTypes = {
    backgroundColor: PropTypes.shape({
      red: PropTypes.number.isRequired,
      green: PropTypes.number.isRequired,
      blue: PropTypes.number.isRequired,
      alpha: PropTypes.number,
    }),
    continuous: PropTypes.bool,
    frame: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
    layer: PropTypes.shape(),
    target: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.any])),
    type: PropTypes.string,
    value: PropTypes.number,
  };

  static defaultProps = {
    backgroundColor: colors.clear,
    continuous: false,
    frame: undefined,
    layer: undefined,
    target: undefined,
    type: 'ui-slider',
    value: 0,
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

export default Slider;

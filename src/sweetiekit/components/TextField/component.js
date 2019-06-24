import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../utils';

import Control from '../Control';

class TextField extends React.Component {
  static propTypes = {
    backgroundColor: PropTypes.shape({
      red: PropTypes.number.isRequired,
      green: PropTypes.number.isRequired,
      blue: PropTypes.number.isRequired,
      alpha: PropTypes.number,
    }),
    font: PropTypes.any,
    frame: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
    layer: PropTypes.shape(),
    numberOfLines: PropTypes.number,
    target: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.any])),
    text: PropTypes.string,
    type: PropTypes.string,
  };

  static defaultProps = {
    backgroundColor: colors.clear,
    frame: undefined,
    layer: undefined,
    numberOfLines: 1,
    target: undefined,
    text: '',
    type: 'ui-text-field',
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

export default TextField;
